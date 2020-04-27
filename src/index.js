// 组件批量导出目录
import Button from '../packages/button/index';
import ButtonGroup from '../packages/button-group/index';
import Card from '../packages/card/index';
import Row from '../packages/row/index';
import Col from '../packages/col/index';
import Tag from '../packages/tag/index';
import Dialog from '../packages/dialog/index';
import Input from '../packages/input/index';
import Message from '../packages/message/index';

import  '../packages/loading/index';


const components = {
    Button,
    Card,
    Row,
    Col,
    ButtonGroup,
    Tag,
    Dialog,
    Input
}

const install = function (Vue) {
    Reflect.ownKeys(components).forEach(component => {
        Vue.component(component, components[component]);
    });
    Vue.prototype.$message = Message
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


export default {
    install,
    Message,
    ...components
}
