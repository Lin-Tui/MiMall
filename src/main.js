import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
//import env from './env'
const mock = false;
if (mock) {
    require('./mock/api')
}
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//axios.default.baseURL = env.baseURL;
axios.interceptors.response.use(function(response) {
  let res = response.data;//这个response不是接口返回，而是axios封装给我们的。response.data才是接口返回值。
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
      if (path != '#/index') {
        window.location.href = '/#/login';
        
      } 
      return Promise.reject(res);
  } else {
    Message.warning(res.msg);
    return Promise.reject(res);
  }
}, (error) => {
    let res = error.response;
    Message.warning(res.data.message);
    return Promise.reject(error)
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = true;

new Vue({
  router,
  
  store,
  render: h => h(App),
}).$mount('#app')
