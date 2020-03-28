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
  name: "Card",
  props: {
    header: {},
    contentStyle: {}
  }
};
</script>
