<template>
  <div id="app">
    <!-- <h3>默认按钮</h3>
    <div class="button">
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">错误按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="text">文本按钮</Button>
    </div>

    <h3>朴素按钮</h3>
    <div class="button">
      <Button plain>默认按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="success" plain>成功按钮</Button>
      <Button type="warning" plain>警告按钮</Button>
      <Button type="danger" plain>错误按钮</Button>
      <Button type="info" plain>信息按钮</Button>
      <Button type="text" plain>文本按钮</Button>
    </div>

    <h3>圆角按钮</h3>
    <div class="button">
      <Button round>默认按钮</Button>
      <Button type="primary" round>主要按钮</Button>
      <Button type="success" round>成功按钮</Button>
      <Button type="warning" round>警告按钮</Button>
      <Button type="danger" round>错误按钮</Button>
      <Button type="info" round>信息按钮</Button>
      <Button type="text" round>文本按钮</Button>
    </div>

    <h3>圆形按钮</h3>
    <div class="button">
      <Button circle>⚪</Button>
      <Button type="primary" circle>⚪</Button>
      <Button type="success" circle>⚪</Button>
      <Button type="warning" circle>⚪</Button>
      <Button type="danger" circle>⚪</Button>
      <Button type="info" circle>⚪</Button>
      <Button type="text" circle>⚪</Button>
    </div>

    <h3>禁用状态</h3>
    <div class="button">
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>错误按钮</Button>
      <Button type="info" disabled>信息按钮</Button>
      <Button type="text" disabled>文本按钮</Button>
    </div>

    <h3>加载状态</h3>
    <div class="button">
      <Button loading>默认按钮</Button>
    </div>

    <h3>不同尺寸</h3>
    <div class="button">
      <Button>默认按钮</Button>
      <Button size="small">小型按钮</Button>
      <Button size="mini">超小按钮</Button>
      <div class="button"></div>
      <Button round>默认按钮</Button>
      <Button size="small" round>小型按钮</Button>
      <Button size="mini" round>超小按钮</Button>
      <div class="button"></div>
      <Button circle>O</Button>
      <Button size="small" circle>O</Button>
      <Button size="mini" circle>O</Button>
    </div> -->

    <!-- <div class="button"> -->
    <Card>
      <div slot="header">1</div>
      <div></div>
    </Card>
    <!-- </div> -->

    <!-- <li-row :gutter="24">
      <Col :span="8">1</Col>
      <Col :span="8">1</Col>
      <Col :span="8">1</Col>
    </li-row> -->

    <!-- <Button-group>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button loading>默认按钮</Button>
    </Button-group> -->
    <!-- <Tag closable>
      123
    </Tag> -->

    <!-- <Dialog :visible.sync="dialog">
      <div slot="header">
        标题
      </div>
      <div>
        内容
      </div>
      <div slot="footer">
        <Button @click="open">主要按钮</Button>
        <Button @click="open">主要按钮</Button>
      </div>
    </Dialog>

    <Button type="primary" @click="open">主要按钮</Button> -->
    <!-- <tags hit>
      123
    </tags> -->

    <Button-Group>
      <Button type="primary" icon="li-icon-zuo" round @click="dialog = true">主要按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="primary" icon="li-icon-zuo-copy" round>成功按钮</Button>
    </Button-Group>

    <Button type="primary" loading>主要按钮</Button>

    <Dialog :visible.sync="dialog">
      <div slot="header">
        标题
      </div>
      <div>
        内容
      </div>
      <div slot="footer">
        <Button @click="open">主要按钮</Button>
        <Button @click="open">主要按钮</Button>
      </div>
    </Dialog>
  </div>
</template>

<script>
// import tags from "./tag";
export default {
  name: "App",
  // components: { tags },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    open() {
      this.dialog = false;
    },
  },
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
