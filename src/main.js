import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from 'vue-loading-overlay';
import VueSimpleAlert from 'vue-simple-alert';

Vue.config.productionTip = false

Vue.component('loading-spinner', Loading);
Vue.use(VueSimpleAlert);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
