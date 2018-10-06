import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FootballClassement from '@/components/FootballClassement'
import GoogleMap from '@/components/GoogleMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/football',
      name: 'FootballClassement',
      component: FootballClassement
    },
    {
      path: '/googlemap',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
