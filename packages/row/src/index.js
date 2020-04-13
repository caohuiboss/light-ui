export default {
  name: "Row",
  componentName:"Row",
// gutter	栅格间隔	number	—	0
// type	布局模式，可选 flex，现代浏览器下有效	string	—	—
// justify	flex 布局下的水平排列方式	string	start/end/center/space-around/space-between	start
// align	flex 布局下的垂直排列方式	string	top/middle/bottom	top
// tag	自定义元素标签	string	*	div

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style() {
      const gut = {}
      const { gutter } = this
      if (gutter) {
        gut.marginLeft = `-${gutter / 2}px`;
        gut.marginRight = gut.marginLeft;
      }
      return gut
    }
  },

  render(h) {
    const { tag, justify, align, type, style, $slots: { default: slot } } = this
    const classStyle = [
      'li-row',
      justify !== 'start' ? `is-justify-${justify}` : '',
      align !== 'top' ? `is-align-${align}` : '',
      {
        'li-row-flex': type === 'flex'
      }
    ]
    return h(tag, {
      classStyle,
      style
    }, slot)
  }
};

// 通过基础的 24 分栏，迅速简便地创建布局。
// Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

