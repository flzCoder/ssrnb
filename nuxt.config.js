import hooks from './nuxt/hooks'

export default {
  head: {
    title: 'real-world-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  components: true,
  modules: [
    '@nuxtjs/axios'
  ],
  srcDir: 'nuxt/',
  router: {
    middleware: 'render',
  },
  hooks: hooks(this),
}
