import LiTag from './src/index';

LiTag.install = function(Vue) {
  Vue.component(LiTag.name, LiTag);
};

export default LiTag;
