export default {
  name: "row",
  componentName: "Row",
  // gutter	栅格间隔	number	—	0
  // tag	自定义元素标签	string	*	div

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style() {
      const res = {}
      const { gutter } = this
      if (gutter) {
        res.marginLeft = `-${gutter / 2}px`;
        res.marginRight = res.marginLeft;
      }
      return res
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$children.forEach(col => {
        col.gutter = this.gutter
      })
    })
  },

  render(h) {
    const { tag, style, $slots: { default: slot } } = this
    return h(tag, {
      class:['li-row'],
      style
    }, slot)
  }
};

// 通过基础的 24 分栏，迅速简便地创建布局。
// Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

