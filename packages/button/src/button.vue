<template>
  <button
    class="ch-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'ch-button--' + type : '',
      buttonSize ? 'ch-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="ch-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'ChButton',

    inject: {
      chForm: {
        default: ''
      },
      chFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      _ChFormItemSize() {
        return (this.chFormItem || {}).chFormItemSize;
      },
      buttonSize() {
        return this.size || this._ChFormItemSize || (this.$chEMENT || {}).size;
      },
      buttonDisabled() {
        return this.disabled || (this.chForm || {}).disabled;
      }
    },

    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  };
</script>
