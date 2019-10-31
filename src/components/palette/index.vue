<!--局部样式-->
<style lang="scss" scoped>
.palette {
  display: inline-block;
  padding: 10px;
  font-size: 12px;
  background-color: #f5f5f5;
  .row-wraper {
    display: flex;
    align-items: flex-start;
    span {
      margin-right: 10px;
    }
  }
  .grid-frame {
    box-sizing: content-box;
    border: solid 1px #999;
    border-top-color: #eee;
    border-left-color: #eee;
    background-color: #fff;
    cursor: pointer;
  }
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div class="palette">
    <div class="row-wraper">
      <span>当前选中: </span>
      <mapGrid :value="autoImg" class="grid-frame" />
    </div>
    <div class="row-wraper" style="margin-top: 5px">
      <span>当前吸取: </span>
      <mapGrid :value="autoMap" class="grid-frame" />
      <mapGrid :value="autoProp" class="grid-frame" style="margin-left: 5px" />
    </div>
  </div>
</template>

<script>
import mapGrid from '@/components/mapGrid';

export default {
  name: 'palette',
  props: {
    // 当前选中的素材数据
    curImg: {
      type: Object,
      default() {
        return {};
      },
    },
    // 当前选中的网格数据
    curGrid: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      //#region 页面对象
      //#endregion
      //#region 页面内容绑定数据
      //#endregion
      //#region 页面样式绑定数据
      //#endregion
    };
  },
  watch: {},
  computed: {
    //#region 常量计算属性
    //#endregion
    //#region 数据转换计算属性
    autoImg() {
      return {
        map: {
          resId: this.curImg.resId || 0,
          resNum: this.curImg.resNum || 0,
        },
      };
    },
    autoMap() {
      return {
        map: this.curGrid.map,
      };
    },
    autoProp() {
      return {
        map: this.curGrid.prop,
      };
    },
    //#endregion
    //#region 样式计算属性
    //#endregion
  },
  methods: {
    //#region 页面事件方法
    //#endregion
    //#region 业务逻辑方法
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
  mounted() {},
  components: {
    mapGrid,
  },
};
</script>
