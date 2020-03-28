<script>
// type	类型	string	success/info/warning/danger	—
// closable	是否可关闭	boolean	—	false
// disable-transitions	是否禁用渐变动画	boolean	—	false
// border	是否有边框描边	boolean	—	false
// color	背景色	string	—	—
// size	尺寸	string	medium / small / mini	—
// theme	主题	string	dark / light / plain	light

export default {
  name: "Tag",
  props: {
    closable: Boolean,
    type: String,
    border: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    theme: {
      type: String,
      default: "light",
      validator(val) {
        return ["dark", "light", "plain"].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    closeTag(e) {
      e.stopPropagation();
      this.$emit("close", e);
    },
    clickTag(e) {
      this.$emit("click", e);
    }
  },
  render(h) {
    const {
      type,
      size,
      border,
      theme,
      color,
      disableTransitions,
      closable,
      closeTag,
      clickTag,
      $slots: { default: slot }
    } = this;

    const classArray = [
      "li-tag",
      type ? `li-tag-${type}` : "",
      size ? `li-tag-${size}` : "",
      border ? `li-tag-${border}` : "",
      theme ? `li-tag-${theme}` : ""
    ];

    const el = (
      <span
        class={classArray}
        style={{ backgroundColor: color }}
        on-click={clickTag}
      >
        {slot}
        {closable && (
          <i class="li-tag_close li-icon-close" on-click={closeTag}></i>
        )}
      </span>
    );

    return disableTransitions ? (
      el
    ) : (
      <transition name="el-zoom-in-center">{el}</transition>
    );
  }
};
</script>
