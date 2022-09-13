import { RouteRecordRaw } from 'vue-router'
// import Home from '@vw//Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ()=>import(/* webpackChunkName: "home" */ '@vw/home.vue'),
    children: [
      {
        path: 'lv2',
        name: 'lv2',
        component: () => import(/* webpackChunkName: "lv2" */ '@vw/second.vue'),
        children: [
          {
            path: 'lv3',
            name: 'lv3',
            component: () => import(/* webpackChunkName: "lv3" */ '@vw/third.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/next',
    name: 'next',
    component: ()=>import(/* webpackChunkName: "home" */ '@vw/next.vue'),
  }
]

export default routes