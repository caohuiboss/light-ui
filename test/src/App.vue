<template>
  <div id="app">
    <!-- <h3>默认按钮</h3>
    <div class="button">
      <li-button>默认按钮</li-button>
      <li-button type="primary">主要按钮</li-button>
      <li-button type="success">成功按钮</li-button>
      <li-button type="warning">警告按钮</li-button>
      <li-button type="danger">错误按钮</li-button>
      <li-button type="info">信息按钮</li-button>
      <li-button type="text">文本按钮</li-button>
    </div>

    <h3>朴素按钮</h3>
    <div class="button">
      <li-button plain>默认按钮</li-button>
      <li-button type="primary" plain>主要按钮</li-button>
      <li-button type="success" plain>成功按钮</li-button>
      <li-button type="warning" plain>警告按钮</li-button>
      <li-button type="danger" plain>错误按钮</li-button>
      <li-button type="info" plain>信息按钮</li-button>
      <li-button type="text" plain>文本按钮</li-button>
    </div>

    <h3>圆角按钮</h3>
    <div class="button">
      <li-button round>默认按钮</li-button>
      <li-button type="primary" round>主要按钮</li-button>
      <li-button type="success" round>成功按钮</li-button>
      <li-button type="warning" round>警告按钮</li-button>
      <li-button type="danger" round>错误按钮</li-button>
      <li-button type="info" round>信息按钮</li-button>
      <li-button type="text" round>文本按钮</li-button>
    </div>

    <h3>圆形按钮</h3>
    <div class="button">
      <li-button circle>⚪</li-button>
      <li-button type="primary" circle>⚪</li-button>
      <li-button type="success" circle>⚪</li-button>
      <li-button type="warning" circle>⚪</li-button>
      <li-button type="danger" circle>⚪</li-button>
      <li-button type="info" circle>⚪</li-button>
      <li-button type="text" circle>⚪</li-button>
    </div>

    <h3>禁用状态</h3>
    <div class="button">
      <li-button disabled>默认按钮</li-button>
      <li-button type="primary" disabled>主要按钮</li-button>
      <li-button type="success" disabled>成功按钮</li-button>
      <li-button type="warning" disabled>警告按钮</li-button>
      <li-button type="danger" disabled>错误按钮</li-button>
      <li-button type="info" disabled>信息按钮</li-button>
      <li-button type="text" disabled>文本按钮</li-button>
    </div>

    <h3>加载状态</h3>
    <div class="button">
      <li-button loading>默认按钮</li-button>
    </div>

    <h3>不同尺寸</h3>
    <div class="button">
      <li-button>默认按钮</li-button>
      <li-button size="small">小型按钮</li-button>
      <li-button size="mini">超小按钮</li-button>
      <div class="button"></div>
      <li-button round>默认按钮</li-button>
      <li-button size="small" round>小型按钮</li-button>
      <li-button size="mini" round>超小按钮</li-button>
      <div class="button"></div>
      <li-button circle>O</li-button>
      <li-button size="small" circle>O</li-button>
      <li-button size="mini" circle>O</li-button>
    </div> -->

    <!-- <div class="button"> -->
    <li-card>
      <div slot="header">1</div>
      <div></div>
    </li-card>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  .button {
    margin: 5px;

    .li-button {
      margin: 0 4px;
    }
  }
}
</style>
