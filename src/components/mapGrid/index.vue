<!--局部样式-->
<style lang="scss" scoped>
.map-grid {
  display: inline-block;
  width: 32px;
  height: 32px;
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div
    class="map-grid"
    :style="autoStyle">
  </div>
</template>

<script>
export default {
  name: 'mapGrid',
  props: {
    value: {
      type: Object,
      default() {
        return {
          resId: 0,
          resNum: 1,
          pass: true,
        };
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
    //#endregion
    //#region 样式计算属性
    // 自动计算样式
    autoStyle() {
      const x = (this.value.resNum - 1) % 8;
      const y = Math.floor((this.value.resNum - 1) / 8);
      const style = {};
      style['background'] = `
        url('/image/map/${this.value.resId}.png')
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
