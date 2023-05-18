import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
 
  {
    path: '/MainPage',
    name: 'MainPage',
    component: () => import(/* webpackChunkName: "about" */ '../components/MainPage.vue')
  },
  {
    path: '/CompetitionMainPage',
    name: 'CompetitionMainPage',
    component: () => import(/* webpackChunkName: "about" */ '../components/CompetitionMainPage.vue'),
    children: [
      {
        path: '/ChronoTool',
        name: 'ChronoTool',
        component: () => import(/* webpackChunkName: "about" */ '../components/ChronoTool.vue')
      },
      {
              path: '/JudgeTool',
              name: 'JudgeTool',
              component: () => import(/* webpackChunkName: "about" */ '../components/ArrivalOrder.vue')
            },
      {
        path: '/Descalificaciones',
        name: 'Descalificaciones',
        component: () => import(/* webpackChunkName: "about" */ '../components/Disqualifications.vue')
      }
    ]
  },
  // {
  //   path: '/CompetitionMainPage',
  //   name: 'CompetitionMainPage',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/CompetitionMainPage.vue'),
  //   children: [
  //     {
  //       path: '/JudgeTool',
  //       name: 'JudgeTool',
  //       component: () => import(/* webpackChunkName: "about" */ '../components/ArrivalOrder.vue')
  //     }
  //   ]
  // },
  {
    
    path: '/Chronomether_item',
    name: 'Chronomether_item',
    component: () => import(/* webpackChunkName: "about" */ '../components/Chronomether_item.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
