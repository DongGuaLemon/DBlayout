import Vue from 'vue'
import Router from 'vue-router'
import create from './views/create.vue'
import del from './views/delete.vue'
import home from './views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/selectpage',
      name: 'selectpage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/selectpage.vue')
    },
    {
      path:'/delpage',
      name:'delpage',
      component:del
    }
  ]
})
