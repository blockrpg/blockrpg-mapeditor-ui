<!--局部样式-->
<style lang="scss" scoped>
.grid-editor {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  background-color: #f5f5f5;
  padding: 10px;
  .editor-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .editor-cell {
      display: flex;
      align-items: center;
      width: 120px;
      .span-wraper {
        width: 40px;
      }
    }
    .editor-blank {
      width: 15px;
      min-width: 15px;
    }
  }
  .save-btn {
    font-size: 12px;
  }
}
</style>

<!--全局局部覆盖样式-->
<style>
.grid-editor *:not(.el-select) .el-input {
  width: 80px;
}
.grid-editor .el-select .el-input {
  width: 160px;
}
</style>

<template>
  <div class="grid-editor">
    <div class="editor-row">
      <div
        class="editor-cell"
        style="width: 200px">
        <div class="span-wraper">
          <span>事件: </span>
        </div>
        <el-select
          v-model="formData.eventId">
          <el-option value="事件1" name="事件1">事件1</el-option>
          <el-option value="事件2" name="事件2">事件2</el-option>
        </el-select>
      </div>
      <button class="save-btn">保存</button>
    </div>
    <div
      class="editor-row"
      style="margin-top: 5px;margin-bottom: 5px">
      <div class="editor-cell">
        <div class="span-wraper">
          <span>Id: </span>
        </div>
        <el-input
          v-model="formData.resId"
          size="mini"
          clearable
        />
      </div>
      <div class="editor-blank"></div>
      <div class="editor-cell">
        <div class="span-wraper">
          <span>序号: </span>
        </div>
        <el-input
          v-model="formData.resNum"
          size="mini"
          clearable
        />
      </div>
    </div>
    <div
      class="editor-row">
      <div class="editor-cell">
        <div class="span-wraper">
          <span>Mask: </span>
        </div>
        <el-input
          v-model="formData.passMask"
          size="mini"
          clearable
        />
      </div>
      <div class="editor-blank"></div>
      <div class="editor-cell">
        <div class="span-wraper">
          <span>抬升: </span>
        </div>
        <el-checkbox
          v-model="formData.raised"
          size="mini"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid-editor',
  props: {},
  data() {
    return {
      //#region 页面对象
      //#endregion
      //#region 页面内容绑定数据
      formData: {
        resId: 0,
        resNum: 0,
        passMask: 0,
        raised: false,
        eventId: undefined,
      },
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
