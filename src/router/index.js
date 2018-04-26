import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyComponent from '@/components/MyComponent'
import YouComponent from '@/components/YouComponent'
import HerComponent from '@/components/HerComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'MyComponent',
      component: MyComponent
    },
    {
      path: '/b',
      name: 'YouComponent',
      component: YouComponent
    },
    {
      path: '/c',
      name: 'HerComponent',
      component: HerComponent
    }
  ]
})
