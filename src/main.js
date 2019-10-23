import Vue from 'vue';
import App from './App';

const vm = new Vue({
    el: '#root',
    render: (createElement) => createElement(App)
});
