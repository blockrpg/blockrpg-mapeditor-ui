<!--局部样式-->
<style lang="scss" scoped>
.tool-box {
  display: inline-flex;
  flex-direction: column;
  font-size: 12px;
  padding: 10px;
  background-color: #f5f5f5;
  span {
    margin-bottom: 5px;
  }
  .tool-wraper {
    display: flex;
    user-select: none;
    .tool-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 28px;
      border: solid 1px #999;
      border-top-color: #eee;
      border-left-color: #eee;
      background-color: #f5f5f5;
      cursor: pointer;
    }
    .tool-btn.active {
      border: solid 1px #eee;
      border-top-color: #999;
      border-left-color: #999;
      background-color: #f2f2f2;
    }
  }
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div class="tool-box">
    <span>工具箱</span>
    <div class="tool-wraper">
      <div
        class="tool-btn"
        :class="{active: curKey === tool.key}"
        @click="handleClick(tool.key)"
        v-for="tool in toolList"
        :key="tool.key">
        拖
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tool-box',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      //#region 页面对象
      toolList: [
        { key: '1', name: '拖' },
        { key: '2', name: '拖' },
        { key: '3', name: '拖' },
      ],
      //#endregion
      //#region 页面内容绑定数据
      curKey: '',
      //#endregion
      //#region 页面样式绑定数据
      //#endregion
    };
  },
  watch: {
    value: {
      handler(nv) {
        this.curKey = nv;
      },
      immediate: true,
    },
    curKey: {
      handler(nv) {
        this.$emit('input', nv);
      },
    },
  },
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
    handleClick(nv) {
      this.curKey = nv;
    },
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
