<!--局部样式-->
<style lang="scss" scoped>
.map-selector {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background-image: 
    linear-gradient(45deg, #ccc 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, #ccc 0),
    linear-gradient(45deg, #ccc 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, #ccc 0);
  background-size: 18px 18px;
  background-position: 0 0, 9px 9px, 9px 9px, 18px 18px;
  overflow-y: auto;
  overflow-x: hidden;
  img {
    position: absolute;
    top: 0px;
    left: 5px;
    z-index: 1;
  }
  .map-hover-frame {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
  }
  .map-selected-frame {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 38px;
    height: 38px;
    border: solid 3px #fff;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div
    class="map-selector">
    <div
      @mouseenter="handleMouseEnter"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave">
      <img
        :src="`/image/map/${this.resId}.png`"
      />
      <div
        v-if="autoShowHover"
        class="map-hover-frame"
        :style="autoMapHoverFrameStyle"
        @click="handleMapHoverFrameClick"
        @mousemove.stop="() => {}">
      </div>
      <div
        v-if="selectedOffset > 0"
        class="map-selected-frame"
        :style="autoMapSelectedFrameStyle"
        @mousemove.stop="() => {}">
      </div>
    </div>
  </div>
</template>

<script>
// 按键方向映射
// 支持WSAD键
// 支持键盘方向键
// 支持虚拟键盘
const KeyDirMap = {
  ArrowUp: 0,
  KeyW: 0,
  Up: 0,
  ArrowDown: 1,
  KeyS: 1,
  Down: 1,
  ArrowLeft: 2,
  KeyA: 2,
  Left: 2,
  ArrowRight: 3,
  KeyD: 3,
  Right: 3,
};

export default {
  name: 'mapSelector',
  props: {
    // 传入的Map图片资源Id
    resId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //#region 页面对象
      //#endregion
      //#region 页面内容绑定数据
      mouseX: 0,
      mouseY: 0,
      selectedOffset: 0,
      showHover: false,
      //#endregion
      //#region 页面样式绑定数据
      //#endregion
    };
  },
  watch: {
    resId: {
      handler(nv, ov) {
        this.selectedOffset = 0;
      },
    },
    selectedOffset: {
      handler(nv, ov) {
        this.$emit('change', nv);
      },
    },
  },
  computed: {
    //#region 常量计算属性
    //#endregion
    //#region 数据转换计算属性
    // 当前鼠标所在的网格坐标
    autoMouseGrid() {
      const result = {
        x: Math.floor(this.mouseX / 32),
        y: Math.floor(this.mouseY / 32),
      };
      result.offset = result.y * 8 + result.x + 1;
      return result;
    },
    // 是否显示Hover
    autoShowHover() {
      return (
        this.showHover &&
        this.autoMouseGrid.x >= 0 &&
        this.autoMouseGrid.x < 8 &&
        this.autoMouseGrid.y >= 0
      );
    },
    //#endregion
    //#region 样式计算属性
    // Hover阴影样式
    autoMapHoverFrameStyle() {
      const style = {};
      style['top'] = `${this.autoMouseGrid.y * 32}px`;
      style['left'] = `${this.autoMouseGrid.x * 32 + 5}px`;
      return style;
    },
    // 选中框样式
    autoMapSelectedFrameStyle() {
      const style = {};
      const x = (this.selectedOffset - 1) % 8;
      const y = Math.floor((this.selectedOffset - 1) / 8);
      style['top'] = `${y * 32 - 3}px`;
      style['left'] = `${x * 32 + 5 - 3}px`;
      return style;
    },
    //#endregion
  },
  methods: {
    //#region 页面事件方法
    // 鼠标进入图片
    handleMouseEnter() {
      this.showHover = true;
    },
    // 鼠标离开图片
    handleMouseLeave() {
      this.showHover = false;
    },
    // 鼠标在地图图片上移动事件
    handleMouseMove(e) {
      this.mouseX = e.layerX;
      this.mouseY = e.layerY;
    },
    // Hover上点击的选中事件
    handleMapHoverFrameClick() {
      this.selectedOffset = this.autoMouseGrid.offset;
    },
    // 真实键事件
    handleKeyDown(e) {
      this.moveByCode(e.code);
    },
    //#endregion
    //#region 业务逻辑方法
    // 根据Code驱动玩家移动
    moveByCode(code) {
      if (this.selectedOffset > 0) {
        const newDir = KeyDirMap[code];
        if (isFinite(newDir)) {
          const bakOffset = this.selectedOffset;
          // 方向移动
          if (newDir === 0) {
            this.selectedOffset -= 8;
          } else if (newDir === 1) {
            this.selectedOffset += 8;
          } else if (newDir === 2) {
            this.selectedOffset -= 1;
          } else if (newDir === 3) {
            this.selectedOffset += 1;
          }
          // 越界恢复
          if (this.selectedOffset < 1) {
            this.selectedOffset = bakOffset;
          }
        }
      }
    },
    //#endregion
    //#region 接口访问方法
    //#endregion
    //#region 数据转换方法
    //#endregion
    //#region 自动样式方法
    //#endregion
    //#region 其他方法
    //#endregion
  },
  created() {},
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },
  components: {},
};
</script>
