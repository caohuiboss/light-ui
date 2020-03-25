import LiCol from './src/index.js';

LiCol.install = function(Vue) {
  Vue.component(LiCol.name, LiCol);
};

export default LiCol;
