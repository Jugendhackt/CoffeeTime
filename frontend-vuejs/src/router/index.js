import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/routes/Hello'
import Map from '@/routes/Karte'
import About from '@/routes/About'
import Ranking from '@/routes/Ranking'
import Formular from '@/routes/Formular'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/karte',
    	name: "Karte",
    	component: Map
    },
    {
      path: '/about',
      name: "Über uns",
      component: About
    },
    {
      path: "/ranking",
      name: "Ranking",
      component: Ranking
    },
    {
      path: "/formular",
      name: "Formular",
      component: Formular
    }
  ]
})
