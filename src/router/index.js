import Vue from 'vue';
import Router from 'vue-router';
import CardDetail from '../views/CardDetail';
import CardList from '../views/CardList';
import cards from '../data/cards.json';

Vue.use(Router);

const routes = [
  { path: '/card/:index', component: CardDetail, props: route => ({ index: route.params.index, cards }) },
  { path: '/', component: CardList, props: { cards } }
];

export default new Router({
  mode: 'history',
  routes
});
