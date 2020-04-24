import Vue from 'vue'
import Message from './src/index';

const message = function (options) {
    const action = {
        type: 'info',
        message: '信息集合',
        time: 1200,
        showclose: false
    }

    const Component = Vue.extend(Message)
    for (const key in options) {
        action[key] = options[key]
    }

    const { type, message, time, showclose } = action
    const vm = new Component({
        el: document.createElement('div'),
        data: () => ({
            type: type || 'info',
            message,
            time,
            show: true,
            showclose
        })
    })
    document.body.appendChild(vm.$el)
}

export default message;