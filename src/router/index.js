import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const video = () => import('../views/video.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/video/:id', name:'video', component: video },
    ]
  })
}
