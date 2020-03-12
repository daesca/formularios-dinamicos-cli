import Vue from 'vue';
import App from './App.vue';
import globalFunctions from './utilities/globalFunctions';
import store from '../store';
import textos from './languages/textos';

// Vue.use(globalFunctions);
Vue.prototype.$globalFunctions = globalFunctions;
Vue.prototype.$languages = textos;

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')