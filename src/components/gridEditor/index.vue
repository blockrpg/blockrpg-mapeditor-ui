<!--局部样式-->
<style lang="scss" scoped>
.grid-editor {
  width: 300px;
  height: 99px;
  padding: 10px;
  font-size: 12px;
  background-color: #e0e0e0;
  .editor-row {
    display: flex;
    align-items: center;
    .editor-item {
      display: flex;
      align-items: center;
      .label-div {
        margin-right: 10px;
      }
    }
  }
  .grid-frame {
    box-sizing: content-box;
    border: solid 1px #999;
    border-top-color: #eee;
    border-left-color: #eee;
    background-color: #fff;
    margin-right: 15px;
  }
}
</style>

<!--全局局部覆盖样式-->
<style>
.el-popover {
  min-width: unset!important;
  padding: 3px!important;
}
</style>

<template>
  <div class="grid-editor">
    <div class="editor-row">
      <mapGrid
        :value="autoGrid"
        class="grid-frame"
      />
      <div class="editor-item">
        <div class="label-div">事件: </div>
        <el-select
          style="width: 193px"
          v-model="formData.eventId"
          clearable
          placeholder="网格触发事件">
          <el-option name="事件1" value="事件1"></el-option>
          <el-option name="事件2" value="事件2"></el-option>
        </el-select>
      </div>
    </div>
    <div
      class="editor-row"
      style="margin-top: 10px">
      <div
        class="editor-item"
        style="margin-right: 15px">
        <div class="label-div">抬升: </div>
        <el-checkbox v-model="formData.raised" />
      </div>
      <div class="editor-item">
        <div class="label-div">PassMask: </div>
        <el-input
          v-model="formData.passMask"
          placeholder="Mask数"
          style="width: 110px"
          clearable
          @clear="handlePassMaskClear"
          @dblclick.native="handleDBLClick"
        />
        <el-popover
          trigger="hover"
          placement="right">
          <passMask
            v-model="formData.passMask"
            :resId="formData.resId"
            :resNum="formData.resNum"
            :size="58"
          />
          <button slot="reference" style="margin-left: 5px">图</button>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { GridMeta } from 'blockrpg-core/built/Model/MapBlock/Entity/GridMeta';
import mapGrid from '@/components/mapGrid';
import passMask from '@/components/passMask';

export default {
  name: 'grid-editor',
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
      formData: {
        resId: 0,
        resNum: 0,
        raised: false,
        passMask: 0,
        eventId: undefined,
      },
      //#endregion
      //#region 页面样式绑定数据
      //#endregion
    };
  },
  watch: {
    value: {
      handler(nv) {
        this.formData = nv;
      },
      immediate: true,
    },
    formData: {
      handler(nv) {
        this.$emit('input', nv);
      },
      deep: true,
    },
  },
  computed: {
    //#region 常量计算属性
    //#endregion
    //#region 数据转换计算属性
    autoGrid() {
      return {
        map: this.formData,
      };
    },
    //#endregion
    //#region 样式计算属性
    //#endregion
  },
  methods: {
    //#region 页面事件方法
    handleDBLClick() {
      this.formData.passMask = GridMeta.PassAll;
    },
    handlePassMaskClear() {
      this.formData.passMask = GridMeta.UnPassAll;
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
  components: {
    mapGrid,
    passMask,
  },
};
</script>
