import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import CardDetail from './views/CardDetail.vue';
import CardList from './views/CardList.vue';
import cards from './data/cards.json';

Vue.use(Router);

const routes = [
  { path: '/card/:index', component: CardDetail, props: (route) => ({ index: route.params.index, cards }) },
  { path: '/', component: CardList, props: { cards } }
];

const router = new Router({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
