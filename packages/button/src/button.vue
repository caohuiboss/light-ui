<template>
  <button
    class="li-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="classChange"
  >
    <i class="li-iconfont li-icon-loading" v-if="loading"></i>
    <i
      class="li-iconfont"
      :class="icon"
      :style="[{ float: float }, { margin: margin }]"
      v-if="icon && !loading"
    ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "Button" || "li-button",
  props: {
    type: {
      // 按钮类型 primary / success / warning / danger / info / text
      type: String,
      default: "default",
    },
    size: String, // 按钮大小  small / mini
    icon: {
      // icon 图标
      // 暂无图标  可自行去阿里下载
      type: String,
      default: "",
    },
    nativeType: {
      // 原生 type 属性
      type: String,
      default: "button",
    },
    loading: Boolean, // 是否loading
    disabled: Boolean, // 是否loading
    plain: Boolean, // 朴素按钮
    autofocus: Boolean, // 是否默认聚焦
    round: Boolean, // 是否圆角按钮
    circle: Boolean, // 是否圆形按钮
  },
  computed: {
    classChange() {
      return [
        this.type ? "li-button--" + this.type : "",
        this.size ? "li-button--" + this.size : "",
        {
          "is-disabled": this.disabled,
          "is-loading": this.loading,
          "is-plain": this.plain,
          "is-round": this.round,
          "is-circle": this.circle,
          "is-icon": this.icon || this.loading,
        },
      ];
    },
    float() {
      const icon = this.icon.split("-");
      if (icon[icon.length - 1] === "copy") {
        return "right";
      } else {
        return "left";
      }
    },
    margin() {
      const icon = this.icon.split("-");
      if (icon[icon.length - 1] === "copy") {
        return "0 6px 0 -6px";
      } else {
        return "0 -6px 0 6px";
      }
    },
  },
  created() {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
