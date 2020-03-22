// 组件批量导出目录
import LiButton from '../packages/button/index.js';



const components = {
    LiButton
}

const install = function (Vue, opts = {}) {
    Reflect.ownKeys(components).forEach(component => {
        console.log(component)
        Vue.component(component, components[component]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
}
