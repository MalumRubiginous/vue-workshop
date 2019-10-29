import Vue from 'vue';
import VueRouter from 'vue-router';

import Foo from './components/Foo';
import Bar from './components/Bar';

Vue.use(VueRouter);
const routes = [
    { name: 'foo', path: '/foo', component: Foo },
    { name: 'bar', path: '/bar', component: Bar }
];

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;
