import Vue from 'vue'

Vue.directive('loading', {
    //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind: function (el, binding) {
        const tempDiv = document.createElement("div")
        tempDiv.className = 'mask-loading'
        tempDiv.innerHTML = `<div class="mask-loading-text">
          <i class="li-iconfont li-icon-loading"></i>
          加载中...
        </div>`
        el.loadingElement = tempDiv
        const curStyle = window.getComputedStyle(el)
        const position = curStyle.position
        if (position === 'absolute' || position === 'relative') {
            el.style.position = position
        } else {
            el.style.position = 'relative'
        }
        if (binding.value) {
            el.appendChild(tempDiv)
        }
    },
    // 当被绑定的元素插入到 DOM 中时……
    //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted: function (el, binding) {

    },
    //所在组件的 VNode 更新时调用
    update: function (el, binding) {
        if (binding.value) {
            if (el.loadingElement.parentNode === null) {
                el.appendChild(el.loadingElement)
            }
        } else {
            if (el === el.loadingElement.parentNode) {
                el.removeChild(el.loadingElement)
            }
        }
    },
    //指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated() {
        //console.log("渲染完成了");
    },
    //只调用一次，指令与元素解绑时调用
    unbind: function (el, binding) {
        if (el.loadingElement.parentNode === el) {
            el.removeChild(el.loadingElement)
        }
        el.loadingElement = null
    }
})