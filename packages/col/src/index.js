export default {
  name: "Col",

  // span	栅格占据的列数	number	—	24
  // offset	栅格左侧的间隔格数	number	—	0


  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style() {
      let { gutter } = this.$parent
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
  },
  render(h) {
    const { style, tag, $slots: { default: slot }, offset, span } = this
    return h(tag, {
      class: [`li-col-span-${span}`, `li-col-offset-${offset}`],
      style
    }, slot)
  }
};

