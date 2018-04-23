import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 设置路由
const router = new VueRouter({
  mode:'history',
  routes:[
    //首页
    {
      path:"/",redirect: '/index'
    },
    {
      path:"/index",
      component:resolve => require(['./components/index/index.vue'], resolve)
    },

  ]
})

export default router;
