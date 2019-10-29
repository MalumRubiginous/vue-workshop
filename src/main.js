import Vue from 'vue';

import store from './store/index.js';
import App from './App';

const vm = new Vue({
    el: '#root',
    store,
    render: (createElement) => createElement(App)
});
