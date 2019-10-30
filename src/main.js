import Vue from 'vue';
import store from './store';
import router from './routes';
import App from './App';

const vm = new Vue({
    router,
    store,
    render: (createElement) => createElement(App)
}).$mount('#root');
