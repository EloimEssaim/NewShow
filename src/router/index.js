import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Timeline',
      component: resolve => require(['@/pages/timeline'], resolve)
    },
    {
      path: '/detail',
      name: 'Detail',
      component: resolve => require(['@/pages/detail'], resolve)
    }
  ]
})
