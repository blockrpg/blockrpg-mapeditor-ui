<!--局部样式-->
<style lang="scss" scoped>
.map-grid {
  display: inline-block;
  width: 32px;
  height: 32px;
  .prop-grid {
    width: 32px;
    height: 32px;
  }
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div
    class="map-grid"
    :style="autoMapStyle">
    <div
      v-if="autoProp"
      class="prop-grid"
      :style="autoPropStyle">
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapGrid',
  props: {
    value: {
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
    autoMap() {
      return ((this.value || {}).map || {
        resId: 0,
        resNum: 0,
        passMask: 0,
      });
    },
    autoProp() {
      return ((this.value || {}).prop || undefined);
    },
    //#endregion
    //#region 样式计算属性
    // 自动计算MapGrid样式
    autoMapStyle() {
      const x = (this.autoMap.resNum - 1) % 8;
      const y = Math.floor((this.autoMap.resNum - 1) / 8);
      const style = {};
      style['background'] = `
        url('/image/map/${this.autoMap.resId}.png')
        no-repeat
        -${x * 32}px
        -${y * 32}px
      `;
      return style;
    },
    // 自动计算PropGrid样式
    autoPropStyle() {
      const x = (this.autoProp.resNum - 1) % 8;
      const y = Math.floor((this.autoProp.resNum - 1) / 8);
      const style = {};
      style['background'] = `
        url('/image/map/${this.autoProp.resId}.png')
        no-repeat
        -${x * 32}px
        -${y * 32}px
      `;
      return style;
    },
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
  components: {},
};
</script>
