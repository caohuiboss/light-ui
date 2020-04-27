<template>
  <transition name="fade">
    <div :class="['li-message',`li-message-${type}`]" v-if="show">
      <i
        :class="[
        'li-iconfont',
        'li-i',
        `li-icon-${type}`
    ]"
      ></i>
      <span class="li-message-text">{{message}}</span>
      <i
        v-if="showclose"
        :class="[
        'li-iconfont',
        'li-close',
        'li-icon-close'
    ]"
        @click="close"
      ></i>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      timeer: null
    };
  },
  created() {},
  mounted() {
    this.toggleTimeout();
  },
  destroyed() {
    this.toggleTimeout();
  },
  methods: {
    close() {
      this.setShow();
      clearTimeout(this.timeer);
    },
    setShow() {
      this.show = !this.show;
    },
    toggleTimeout() {
      if (isNaN(this.time)) return;
      if (this.timeer !== null) {
        clearTimeout(this.timeer);
      } else {
        this.timeer = setTimeout(this.setShow, this.time);
      }
    }
  }
};
</script>