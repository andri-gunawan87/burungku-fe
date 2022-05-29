import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: "%s - Lomba Burung",
    title: "Lomba Burung",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      {href:"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap", rel:"stylesheet"},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/static/css/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   baseURL: "http://127.0.0.1:8080/",
  // },

  axios: {
    baseURL: "http://127.0.0.1:5000/",
    proxy: true,
    prefix: "/api/",
  },
  proxy: {
    "/api/": {
      target: "http://127.0.0.1:5000/",
      pathRewrite: { "^/api/": "" },
    },
  },

  auth: {
    strategies: {
      google: {
        clientId:
          "209484141957-8cuktphu1efj89gankvflrco5dvigr1m.apps.googleusercontent.com",
        codeChallengeMethod: "",
        responseType: "token id_token",
        endpoints: {
          token: "http://127.0.0.1:5000/social-login/google/",
          userInfo: "http://127.0.0.1:5000/auth/user/",
        },
      },
      local: {
        endpoints: {
          login: { url: "login", method: "post", propertyName: "token" },
          user: { url: "me", method: "get", propertyName: "data" },
          logout: false,
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  pwa: {
    meta: {
      title: "Kontes Burung",
      author: "Alkademi",
    },
    manifest: {
      name: "Kontes Burung",
      short_name: "Kontes Burung",
      lang: "en",
    },
  },
};
