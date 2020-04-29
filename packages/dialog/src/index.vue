<template>
  <transition name="toggle">
    <div class="li-dialog-backdrop" v-if="visible">
      <div :class="['li-dialog',{'li-dialog-fullscreen':fullscreenTag}]" ref="dialog" :style="styles">
        <div class="li-dialog-header" @mousedown="mousedown">
          <slot name="header"></slot>
          <span>
            <button class="li-close" v-if="fullscreen" @click="onFullSreen">
            <i class="li-iconfont li-icon-share"></i>
          </button>
          <button class="li-close" v-if="showClose" @click="onClose">
            <i class="li-iconfont li-icon-close"></i>
          </button>
          </span>
        </div>
        <div class="li-dialog-body">
          <slot></slot>
        </div>
        <div class="li-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Dialog",
  props: {
    showClose: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: true
    },
    width: String,
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closeTimer: null,
      fullscreenTag:false
    };
  },
  computed: {
    styles() {
      return this.width && { width: this.width };
    }
  },
  methods: {
    mousedown(){
      if(this.fullscreenTag) return
    },
    onClose() {
      this.$emit("on-close");
      this.hide();
    },
    onFullSreen(){
      this.fullscreenTag = !this.fullscreenTag
    },
    hide() {
      this.$emit("update:visible", false);
      this.$emit("on-closed");
    }
  }
};
</script>
