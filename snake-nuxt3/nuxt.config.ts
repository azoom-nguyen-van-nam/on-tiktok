export default defineNuxtConfig({
  ssr: false,
  css: ['@/assets/main.scss'],
  app: {
    rootTag: 'main',
    rootId: 'nuxt-example-main',
    head: {
      title: 'Nuxt3 Example',
      meta: [{ name: 'description', content: 'Nuxt 3' }],
      noscript: [{ children: 'JavaScript is required' }]
    }
  },
  devServer: {
    host: 'localhost',
    port: 3000
  }
})
