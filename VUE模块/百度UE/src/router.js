import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 设置路由
const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:"/",redirect: '/index'
    },
    {
      path:"/index",
      component:resolve => require(['./components/a21'], resolve)
    },
  ]
})

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   window.localStorage.getItem('token'))
// }

//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (window.localStorage.getItem('UserID')) {
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   }
//   else {
//     next();
//   }
// })

export default router;
