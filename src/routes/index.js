import Vue from 'vue';
import VueRouter from 'vue-router';

import foo from './foo';
import bar from './bar';

Vue.use(VueRouter);
const routes = [
    foo,
    bar,
];

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;
