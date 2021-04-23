import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../nuxt/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Card: () => import('../../nuxt/components/card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
