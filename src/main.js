import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

// axios.defaults.baseURL ="http://101.251.70.142:8888/";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.timeout = 5000;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
