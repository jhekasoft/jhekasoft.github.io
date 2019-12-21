// import axios from 'axios'
const colors = require('vuetify/es5/util/colors').default
require('dotenv').config()

module.exports = {
  mode: 'universal',
  env: {
    apiBaseUrl: process.env.API_BASE_URL || ''
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'theme-color',
        content: '#00695c'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#00695c'
      },
      {
        name: 'theme-color',
        content: '#00695c'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fira+Sans&display=swap&subset=cyrillic,cyrillic-ext'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    strategy: 'prefix_except_default',
    // rootRedirect: { name: 'index' },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    locales: [
      {
        code: 'ru',
        name: 'Русский'
      },
      {
        code: 'uk',
        name: 'Українська'
      },
      {
        code: 'en',
        name: 'English'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        ru: {
          welcome: 'Привет'
        },
        uk: {
          welcome: 'Вітаю'
        }
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.teal.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  meta: {
    ogTitle: false,
    ogDescription: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
  // generate: {
  //   exclude: [/\w+\/timeline/],
  //   async routes() {
  //     // console.log(this.$i18n.locales)
  //     const { data } = await axios.get(
  //       process.env.API_BASE_URL + 'developer-timeline',
  //       { params: { reverse: '0' } }
  //     )
  //     console.log(data)

  //     return [
  //       { route: '/en/timeline', payload: data },
  //       { route: '/uk/timeline', payload: data },
  //       { route: '/ru/timeline', payload: data }
  //     ]
  //   }
  // }
}
