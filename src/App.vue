<!--局部样式-->
<style scoped>
.app {
  font-size: 14px;
  color: #333;
  width: 100%;
  height: 100%;
}
</style>

<!--全局局部覆盖样式-->
<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
div {
  box-sizing: border-box;
}
.el-select-dropdown .el-select-dropdown__item {
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 10px;
}
.el-select-dropdown .el-select-dropdown__list {
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>

<template>
  <div
    id="app"
    class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {},
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
