<template>
  <div
    :class="[
      'li-input',
      {
        'is-disabled': inputDisabled,
        'li-input-group': $slots.front || $slots.back,
        'li-input-group--front': $slots.front,
        'li-input-group--back': $slots.back,
      },
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template>
      <div class="li-input-group__front" v-if="$slots.front">
        <slot name="front"></slot>
      </div>
      <input
        ref="input"
        :type="type"
        :class="[
          'li-input-content',
          {
            'li-input-hovering': hovering,
            'li-input-focus': focus,
            'li-input-disabled': disabled,
          },
        ]"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :disabled="inputDisabled"
        :readonly="readonly"
      />
      <span class="li-input-clear" v-if="clearable && hovering" @click="clear">
        <i class="li-iconfont li-icon-close"></i>
      </span>
    </template>
  </div>
</template>
<script>
export default {
  name: "Input",
  componentName: "Input",
  inject: {
    elForm: {
      default: "",
    },
    elFormItem: {
      default: "",
    },
  },
  props: {
    value: [String, Number],
    placeholder: String,
    size: String,
    type: {
      type: String,
      default: "text",
    },
    disabled: Boolean,
    readonly: Boolean,
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focus: false,
      hovering: false,
    };
  },
  computed: {
    inputDisabled() {
      return this.disabled;
    },
    showClear() {
      return (
        this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        (this.focused || this.hovering)
      );
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
  },
  created() {},
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },
  },
  methods: {
    handleInput(event) {
      if (event.target.value === this.nativeInputValue) return;
      this.$emit("input", event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleFocus(event) {
      this.focus = true;
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.focus = false;
      this.$emit("blur", event);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
  },
  mounted() {
    this.setNativeInputValue();
  },
};
</script>
