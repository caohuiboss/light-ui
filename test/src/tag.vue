<template>
  <div class="tags">
    <slot></slot>
    <ccc></ccc>
    <div></div>
  </div>
</template>

<script>
export default {
    name:'tag'

}
</script>

<style lang="scss" scoped>
.tags{
  &[hit],&[hit=true]{
      border: 10px solid red;
  }
  &[hit=false]{
      border: none;
  }
}
</style>