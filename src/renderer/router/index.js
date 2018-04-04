import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'authenticate',
      component: require('@/components/Authenticate').default,
      beforeEnter: (to, from, next) => {
        store.commit('global/setShowLeftNav', false)
        next()
      }
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Index').default
    },
    {
      path: '/receiving',
      name: 'receiving',
      component: require('@/components/Receiving/ReceivingScan/ReceivingScan').default
    },
    {
      path: '/receiving/receivebox/:boxId',
      name: 'wroboxitems',
      component: require('@/components/Receiving/ReceiveBox/ReceiveBox').default,
      props: true,
      beforeEnter: (to, from, next) => {
        store.commit('global/setShowLeftNav', false)
        next()
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('global/setShowLeftNav', true)
  next()
})

export default router
