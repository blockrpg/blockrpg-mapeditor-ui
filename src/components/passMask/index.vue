<!--局部样式-->
<style lang="scss" scoped>
.pass-mask {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .img-bkg {
    width: 32px;
    height: 32px;
  }
  .mask-wraper {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .mask-row {
      flex: 1;
      width: 100%;
      display: flex;
      .mask-cell {
        flex: 1;
        height: 100%;
      }
      .mask-cell.unpass {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div
    class="pass-mask"
    :style="autoStyle">
    <div
      class="img-bkg"
      :style="autoBkgStyle">
    </div>
    <div
      class="mask-wraper">
      <div
        class="mask-row"
        v-for="i in 5"
        :key="`mask-row-${i}`">
        <div
          class="mask-cell"
          :class="{unpass: !maskArray[i - 1][j - 1]}"
          v-for="j in 5"
          :key="`mask-cell-${i}-${j}`"
          @click="handleCellClick(i - 1, j - 1)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GridMeta } from 'blockrpg-core/built/Model/MapBlock/Entity/GridMeta';

export default {
  name: 'pass-mask',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    resId: {
      type: Number,
      default: 0,
    },
    resNum: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 64,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      //#region 页面对象
      //#endregion
      //#region 页面内容绑定数据
      maskArray: [],
      //#endregion
      //#region 页面样式绑定数据
      //#endregion
    };
  },
  watch: {
    value: {
      handler(nv) {
        this.maskArray = GridMeta.MaskNumToArray(nv);
      },
      immediate: true,
    },
    maskArray: {
      handler(nv) {
        this.$emit('input', GridMeta.MaskArrayToNum(this.maskArray));
      },
    },
  },
  computed: {
    //#region 常量计算属性
    //#endregion
    //#region 数据转换计算属性
    //#endregion
    //#region 样式计算属性
    autoStyle() {
      const style = {};
      style.width = `${this.size}px`;
      style.height = `${this.size}px`;
      return style;
    },
    autoBkgStyle() {
      const style = {};
      style.transform = `scale(${this.size / 32})`;
      if (this.resNum > 0) {
        const x = (this.resNum - 1) % 8;
        const y = Math.floor((this.resNum - 1) / 8);
        style['background'] = `
          url('/image/map/${this.resId}.png')
          no-repeat
          -${x * 32}px
          -${y * 32}px
        `;
      }
      return style;
    },
    //#endregion
  },
  methods: {
    //#region 页面事件方法
    handleCellClick(i, j) {
      this.maskArray[i][j] = !this.maskArray[i][j];
      this.maskArray.push([]);
      this.maskArray.pop();
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
