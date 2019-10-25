<!--局部样式-->
<style scoped>
.map-selector {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  padding-left: 5px;
  overflow-y: auto;
  overflow-x: hidden;
}
.map-hover-frame {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}
.map-selected-frame {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 38px;
  height: 38px;
  border: solid 3px #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  z-index: 2;
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div
    class="map-selector"
    @mousemove="handleMouseMove">
    <img
      :src="`/image/map/${this.mapId}.png`"
    />
    <div
      class="map-hover-frame"
      :style="autoMapHoverFrameStyle"
      @mousemove.stop="() => {}"
      @click="handleMapHoverFrameClick">
    </div>
    <div
      v-if="selectedOffset >= 0"
      class="map-selected-frame"
      :style="autoMapSelectedFrameStyle"
      @mousemove.stop="() => {}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapSelector',
  props: {
    mapId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //#region 页面对象
      scrollTop: 0,
      mouseX: 0,
      mouseY: 0,
      selectedOffset: -1,
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
    autoMousePoint() {
      const result = {
        x: Math.floor((this.mouseX - 5) / 32),
        y: Math.floor(this.mouseY / 32),
      };
      result.offset = result.y * 8 + result.x + 1;
      return result;
    },
    //#endregion
    //#region 样式计算属性
    autoMapHoverFrameStyle() {
      const style = {};
      style['top'] = `${this.autoMousePoint.y * 32}px`;
      style['left'] = `${this.autoMousePoint.x * 32 + 5}px`;
      return style;
    },
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
    handleScrollChange(e) {
      this.scrollTop = this.$el.scrollTop;
      console.log(this.scrollTop);
    },
    handleMouseMove(e) {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
    },
    handleMapHoverFrameClick() {
      this.selectedOffset = this.autoMousePoint.offset;
      this.$emit('change', {
        resId: 0,
        resNum: this.selectedOffset,
        pass: true,
      });
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
    this.$el.addEventListener('scroll', this.handleScrollChange);
  },
  beforeDestroy() {
    this.$el.removeEventListener('scroll', this.handleScrollChange);
  },
  components: {},
};
</script>
