<template>
  <div class="li-card">
    <div class="li-card__header" v-if="$slots.header || header">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div class="li-card__content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiCard",
  props: {
    header: {},
    contentStyle: {}
  }
};
</script>

<style lang="scss">
.li-card {
  width: 480px;
  height: 320px;
  border: 1px solid gainsboro;
  border-radius: 6px;
  overflow: hidden;

  .li-card__header {
    width: 100%;
    padding: 18px 20px;
    border-bottom: 1px solid gainsboro;
  }

  .li-card__content {
    margin: 10px;
  }
}
</style>
