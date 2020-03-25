import liCard from './src/index.vue';

liCard.install = function(Vue) {
  Vue.component(liCard.name, liCard);
};

export default liCard;
