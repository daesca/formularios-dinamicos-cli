import Vue from 'vue';
import App from './App.vue';
import globalFunctions from './utilities/globalFunctions';
import store from '../store';
import textos from './languages/textos';
import router from './router/index.js';
let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource';
import configRoot from './api/config';

Vue.use(VueResource);

Vue.prototype.$globalFunctions = globalFunctions;
Vue.prototype.$languages = textos;
Vue.prototype.$JQ = require('jquery');
Vue.http.options = configRoot;

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')