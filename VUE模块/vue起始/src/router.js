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

    //艺人
    {
      path:"/artist",
      component:resolve => require(['./components/artist/artist.vue'], resolve),
    },


    //项目
    {
      path:"/project",
      component:resolve => require(['./components/project/project.vue'], resolve)
    },


    //我的
    {
      path:"/my",
      component:resolve => require(['./components/my/my.vue'], resolve),
      // meta: {
      //   requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      // }
    },

  ]
})

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   window.localStorage.getItem('token'))
// }


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
