<template>
  <div class="li-dialog-backdrop" v-if="closed">
    <div class="li-dialog" ref="dialog" :style="styles">
      <div class="li-dialog-header">
        <slot name="header"></slot>
        <button class="li-close" v-if="showClose" @click="handleClose">
          x
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
  watch: {
    visible(val) {
      if (val) {
        this.closed = true;
        this.$emit("open");
      } else {
        this.closed = false;
        this.$emit("close");
      }
    }
  },
  data() {
    return {
      closed: false
    };
  },
  computed: {
    styles() {
      return this.width && { width: this.width };
    }
  },
  methods: {
    handleClose() {
      this.closed = false;
      this.$emit("update:visible", false);
      this.$emit("close");
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  }
};
</script>

<style lang="scss"></style>
