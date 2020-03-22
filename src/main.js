import Vue from 'vue';
import App from './App.vue';
import globalFunctions from './utilities/globalFunctions';
import store from '../store';
import textos from './languages/textos';
// import JQuery from 'jquery';
// global.JQ = JQuery;
let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue.use(globalFunctions);
Vue.prototype.$globalFunctions = globalFunctions;
Vue.prototype.$languages = textos;
Vue.prototype.$JQ = require('jquery');

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')