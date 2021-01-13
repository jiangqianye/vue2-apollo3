import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false; // 阻止启动生产消息


new Vue({
  apolloProvider: createProvider(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
