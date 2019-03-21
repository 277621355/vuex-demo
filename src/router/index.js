import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import car from '@/components/car'
import list from '@/components/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
