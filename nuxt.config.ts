// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,maximum-scale=1,minimum-scale=1,initial-scale=1',
      title: 'Legado Vivo',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        {
          name: 'description',
          content: 'Histórias são os faróis que guiam e iluminam os caminhos.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Legado Vivo'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Histórias são os faróis que guiam e iluminam os caminhos.'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/opengraph.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://legadovivo.com.br/'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image'
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fonts: {
    families: [
      { name: 'Cabinet Grotesk', provider: 'fontshare' },
      { name: 'Tangerine', provider: 'google' }
    ],
    defaults: {
      weights: [300, 400, 500, 600, 700, 800],
      styles: ['normal', 'italic']
    }
  },
  plugins: [],
  css:[
		'@/assets/css/main.css'
	],
  runtimeConfig: {
    public: {
      apiBase: process.env.API
    }
  }
})