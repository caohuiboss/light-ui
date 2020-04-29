export default {
  bind(el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector('.li-dialog-header')
    // 弹窗
    const dragDom = el.querySelector('.li-dialog')
    dragDom.style.overflow = 'auto'
    dialogHeaderEl.style.cursor = 'move'
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
    const moveDown = e => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop
      
      // 获取到的值带px 正则匹配替换
      let styL, styT
      if (sty.left.includes('%')) {
        styL =
          +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
        styT =
          +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
      } else {
        styL = +sty.left.replace(/\px/g, '')
        styT = +sty.top.replace(/\px/g, '')
      }

      document.onmousemove = function(e) {
        const l = e.clientX - disX
        const t = e.clientY - disY
        dragDom.style.left = `${l + styL}px`
        dragDom.style.top = `${t + styT}px`
      }
      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }

    dialogHeaderEl.onmousedown = moveDown
  }
}