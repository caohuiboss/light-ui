<template>
  <transition name="toggle">
    <div class="li-dialog-backdrop" v-if="visible">
      <div class="li-dialog" ref="dialog" :style="styles">
        <div class="li-dialog-header">
          <slot name="header"></slot>
          <button class="li-close" v-if="showClose" @click="onClose">
            <i class="li-iconfont li-icon-close"></i>
          </button>
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
    width: String,
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closeTimer: null
    };
  },
  computed: {
    styles() {
      return this.width && { width: this.width };
    }
  },
  methods: {
    onClose() {
      this.$emit("on-close");
      this.hide();
    },
    hide() {
      this.$emit("update:visible", false);
      this.$emit("on-closed");
    }
  }
};
</script>
