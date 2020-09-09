import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//导入组件
import YuanUI from "../package/index.js";
//注册组件
Vue.use(YuanUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
