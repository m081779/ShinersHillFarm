const colors = require('vuetify/es5/util/colors').default
const routePath = '/server/routes/api';
const serveStatic = require('serve-static');

const baseUrl = process.env.baseUrl || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)

module.exports = {
  telemetry: false,
  generate: {
    dir: 'dist'
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
      { hid: 'description', name: 'description', content: 'Welcome to Shiner\'s Hill Farms!' || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/VueMask.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },

  },
  serverMiddleware: [
    '~/serverMiddleware/getAllGrowCycles',
    '~/serverMiddleware/createNewGrowCycle',
    '~/serverMiddleware/getAllSeedBatches',
    '~/serverMiddleware/createNewSeedBatch',
    '~/serverMiddleware/createNewDailyWaterUsage',
    '~/serverMiddleware/updateOneGrowCycle',
    '~/serverMiddleware/updateAllGrowCycles',
    '~/serverMiddleware/createNewDailyEnvironmentalConditions',
    '~/serverMiddleware/createNewDailyGrowNotes',
    '~/serverMiddleware/deleteGrowCycle',

  ],

}

function withoutNullishEntries(x) {
  return Object.fromEntries(Object.entries(x).filter(([k, v]) => v != null))
}
