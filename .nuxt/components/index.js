import { wrapFunctional } from './utils'

export { default as Logo } from '../../nuxt/components/Logo.vue'
export { default as Card } from '../../nuxt/components/card.vue'

export const LazyLogo = import('../../nuxt/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCard = import('../../nuxt/components/card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
