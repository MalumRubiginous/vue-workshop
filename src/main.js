import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App';

const vm = new Vue({
    router,
    store,
    render: (createElement) => createElement(App)
}).$mount('#root');
