import liButton from './src/button';

liButton.install = function(Vue) {
  Vue.component(liButton.name, liButton);
};

export default liButton;
