import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld.vue'  // 请自行去pages下面创建一个hello.vue，以方便之后的测试

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    }
  ]
})