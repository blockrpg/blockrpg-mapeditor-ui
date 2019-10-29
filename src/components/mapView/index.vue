<!--局部样式-->
<style lang="scss" scoped>
.map-view {
  position: relative;
  width: 100%;
  height: 100%;
  .span-text {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 0px 2px 0px 2px;
    border: solid 1px #333;
    background-color: rgba(255, 255, 255, 0.2);
  }
}
.test-grid {
  position: absolute;
  top: 204px;
  left: 339px;
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div
    class="map-view"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp">
    <mapGrid
      class="test-grid"
      v-for="grid in grids"
      :key="grid.id"
      :value="grid"
    />
    <span
      class="span-text">
      {{`x:${centerX} y:${centerY}`}}
    </span>
  </div>
</template>

<script>
import mapGrid from '@/components/mapGrid';
import { Rect } from 'blockrpg-core/built/Rect';
import { Point } from 'blockrpg-core/built/Point';
import { Space } from 'blockrpg-core/built/Space';
import * as APIMapEditor from '@/api/mapEditor';


// 可视区域宽度
const ViewWidth = 710;
// 可视区域高度
const ViewHeight = 440;

function further(num) {
  return num >= 0 ? Math.ceil(num) : Math.floor(num);
}

export default {
  name: 'map-view',
  props: {},
  data() {
    return {
      //#region 页面对象
      // 块缓存
      blockBuffer: {},
      //#endregion
      //#region 页面内容绑定数据
      // 初始的中心点坐标为(0, 0)
      centerX: 0,
      centerY: 0,
      startX: 0,
      startY: 0,
      grids: [],
      //#endregion
      //#region 页面样式绑定数据
      //#endregion
    };
  },
  watch: {
    // 当前视区覆盖的区块矩形
    autoBlockRect: {
      handler(nv, ov) {
        this.updateMap(nv);
      },
      immediate: true,
    },
  },
  computed: {
    //#region 常量计算属性
    //#endregion
    //#region 数据转换计算属性
    autoPixelRect() {
      const halfWidth = ViewWidth / 2;
      const halfHeight = ViewHeight / 2;
      const x1 = further(this.centerX - halfWidth);
      const x2 = further(this.centerX + halfWidth - 1);
      const y1 = further(this.centerY - halfHeight);
      const y2 = further(this.centerY + halfHeight - 1);
      const rect = Rect.FromTwoPoints(
        new Point(x1, y1),
        new Point(x2, y2),
      );
      return rect;
    },
    autoGridRect() {
      return Rect.FromTwoPoints(
        this.PixelToGrid(this.autoPixelRect.Point1),
        this.PixelToGrid(this.autoPixelRect.Point2),
      );
    },
    autoBlockRect() {
      return Rect.FromTwoPoints(
        Space.GridToBlock(this.autoGridRect.Point1),
        Space.GridToBlock(this.autoGridRect.Point2),
      );
    },
    //#endregion
    //#region 样式计算属性
    //#endregion
  },
  methods: {
    //#region 页面事件方法
    handleMouseDown(e) {
      this.startX = e.clientX - this.$el.offsetLeft;
      this.startY = e.clientY - this.$el.offsetTop;
    },
    handleMouseMove(e) {
      const moveX = e.clientX - this.$el.offsetLeft;
      const moveY = e.clientY - this.$el.offsetTop;
    },
    handleMouseUp(e) {
      const endX = e.clientX - this.$el.offsetLeft;
      const endY = e.clientY - this.$el.offsetTop;
      const diffX = endX - this.startX;
      const diffY = endY - this.startY;
      this.centerX += diffX;
      this.centerY += diffY;
    },
    //#endregion
    //#region 业务逻辑方法
    async updateMap(rect) {
      const result = await APIMapEditor.queryRect({
        mapId: 'test',
        ...rect,
      });
      if (result.success) {
        const list = result.object || [];
        // 把获取的block写入缓存
        list.forEach((item) => {
          const key = `${item.x}~${item.y}`;
          this.blockBuffer[key] = item;
        });
        this.grids = this.readGridsFromBufferRect(this.autoGridRect);
        console.log(this.grids);
      }
    },
    //#endregion
    //#region 接口访问方法
    //#endregion
    //#region 数据转换方法
    // 像素点转化为网格点
    PixelToGrid(pt) {
      return new Point(
        Math.floor((pt.X + 16) / 32),
        Math.floor((pt.Y + 16) / 32),
      );
    },
    //#endregion
    //#region 自动样式方法
    //#endregion
    //#region 其他方法
    // 获取网格所属的Block坐标点和Block内偏移信息
    // 传入网格坐标点，返回Block点，Block内Point点，Block内偏移地址Offset
    getBlockCoordinate(gridPt) {
      const blockPt = Space.GridToBlock(gridPt);
      const fx = gridPt.X + 10;
      const fy = gridPt.Y + 6;
      let px = 0;
      if (fx >= 0) {
        px = fx % 21;
      } else {
        const afx = Math.abs(fx) - 1;
        px = 20 - (afx % 21);
      }
      let py = 0;
      if (fy >= 0) {
        py = fy % 13;
      } else {
        const afy = Math.abs(fy) - 1;
        py = 12 - (afy % 13);
      }
      const point = new Point(px, py);
      const offset = py * 21 + px;
      return {
        Block: blockPt,
        Point: point,
        Offset: offset,
      };
    },
    // 从缓存的区块中读取网格，这里传入的是网格坐标
    readGridFromBuffer(gridPt) {
      // 定义空白网格
      const BlankGrid = {
        pass: false,
        resId: 0,
        resNum: 0,
      };
      const info = this.getBlockCoordinate(gridPt);
      const result = ((this.blockBuffer[info.Block.Id] || {}).grids || [])[info.Offset] || BlankGrid;
      return result;
    },
    // 从缓存的区块中读取网格，这里传入的是空间坐标
    readGridFromBufferSpace(spacePt) {
      return this.readGridFromBuffer(Space.ToGrid(spacePt));
    },
    // 传入矩形对象，从缓存中读取多个网格（会添加坐标）
    readGridsFromBufferRect(rect) {
      const result = rect.Points.map((point) => {
        return {
          id: point.Id,
          x: point.X,
          y: point.Y,
          ...this.readGridFromBuffer(point),
        };
      });
      return result;
    },
    //#endregion
  },
  created() {},
  mounted() {},
  components: {
    mapGrid,
  },
};
</script>
