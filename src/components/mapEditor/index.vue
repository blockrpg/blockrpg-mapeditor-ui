<!--局部样式-->
<style lang="scss" scoped>
.map-editor {
  box-sizing: content-box;
  width: 1000px;
  height: 600px;
  border: solid 1px #333;
  border-radius: 1px;
  .header-box {
    height: 40px;
    border-bottom: solid 1px #333;
    display: flex;
    align-items: center;
    padding-left: 4px;
  }
  .content-box {
    height: 540px;
    display: flex;
    .left-wraper {
      width: 290px;
      height: 100%;
      border-right: solid 1px #333;
    }
    .right-wraper {
      width: 710px;
      height: 100%;
      .map-space {
        height: 440px;
      }
      .tools-box {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: 100px;
        border-top: solid 1px #333;
        overflow-y: auto;
      }
    }
  }
  .footer-box {
    height: 20px;
    border-top: solid 1px #333;
  }
}
</style>

<!--全局局部覆盖样式-->
<style>
</style>

<template>
  <div class="map-editor">
    <div class="header-box">
      <el-select
        v-model="curMapId"
        placeholder="请选择地图">
        <el-option label="test" value="test"></el-option>
      </el-select>
      <el-select
        v-model="curResId"
        placeholder="请选择素材图Id"
        style="margin-left: 10px">
        <el-option label="0" value="0"></el-option>
        <el-option label="1" value="1"></el-option>
        <el-option label="2" value="2"></el-option>
        <el-option label="3" value="3"></el-option>
        <el-option label="4" value="4"></el-option>
        <el-option label="5" value="5"></el-option>
        <el-option label="6" value="6"></el-option>
      </el-select>
    </div>
    <div class="content-box">
      <div class="left-wraper">
        <!-- <mapSelector
          :curResId="curResId"
          @change="handleSelectChange"
        /> -->
      </div>
      <div class="right-wraper">
        <div class="map-space">
          <gridEditor />
          <!-- <mapView
            :curImg="curRes"
            :curTool="curTool"
            @absorb="handleMapViewAbsorb"
          /> -->
        </div>
        <div class="tools-box">
          <palette
            :curImg="curRes"
            :curGrid="curGrid"
          />
          <gridEditor
          />
          <toolBox
            v-model="curTool"
          />
        </div>
      </div>
    </div>
    <div class="footer-box"></div>
  </div>
</template>

<script>
import mapSelector from '@/components/mapSelector';
import mapGrid from '@/components/mapGrid';
import mapView from '@/components/mapView';
import palette from '@/components/palette';
import toolBox from '@/components/toolBox';
import gridEditor from '@/components/gridEditor';

export default {
  name: 'map-editor',
  props: {},
  data() {
    return {
      //#region 页面对象
      // 当前选中的地图Id
      curMapId: 'test',
      // 当前选中的素材资源Id
      curResId: '0',
      // 当前选中的素材数据（仅包含ResId以及ResNum）
      curRes: {},
      // 当前吸取的网格数据
      curGrid: {},
      // 当前选中的工具
      curTool: 'hand',
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
    handleSelectChange(value) {
      this.curRes = {
        resId: this.curResId,
        resNum: value,
      };
    },
    handleMapViewAbsorb(value) {
      this.curGrid = JSON.parse(JSON.stringify(value));
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
  mounted() {
    // 禁用鼠标右键事件
    this.$el.oncontextmenu = () => {
      event.returnValue = false;
    };
  },
  components: {
    mapSelector,
    mapGrid,
    mapView,
    palette,
    toolBox,
    gridEditor,
  },
};
</script>
