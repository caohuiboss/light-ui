// 组件批量导出目录
import LiButton from '../packages/button/index';
import LiCard from '../packages/card/index';
import LiRow from '../packages/row/index';
import LiCol from '../packages/row/index';


const components = {
    LiButton,
    LiCard,
    LiRow,
    LiCol
}

const install = function (Vue) {
    Reflect.ownKeys(components).forEach(component => {
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
