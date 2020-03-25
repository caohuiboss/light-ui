export default {
  name: "LiCol",

  // span	栅格占据的列数	number	—	24
  // offset	栅格左侧的间隔格数	number	—	0
  // push	栅格向右移动格数	number	—	0
  // pull	栅格向左移动格数	number	—	0
  // xs	<768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
  // sm	≥768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
  // md	≥992px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
  // lg	≥1200px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
  // xl	≥1920px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
  // tag	自定义元素标签	string	*	div


  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    getGutter() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'LiRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },

  render(h) {
    const { getGutter, tag, $slots: { default: slot } } = this
    const classArray = []
    const style = {}

    getGutter ? style.paddingLeft = style.paddingRight = getGutter / 2 + 'px' : ''

    ['span', 'offset', 'pull', 'push'].forEach(v => {
      this[v] || this[v] === 0 ?
        classArray.push(
          v !== 'span'
            ? `li-col-${v}-${this[v]}`
            : `li-col-${this[v]}`
        ) : ''
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classArray.push(`li-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classArray.push(
            prop !== 'span'
              ? `li-col-${size}-${prop}-${props[prop]}`
              : `li-col-${size}-${props[prop]}`
          );
        });
      }
    });


    return h(tag, {
      class: ['li-col', classArray],
      style
    }, slot)
  }
};

