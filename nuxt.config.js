export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1 , maximum-scale=1.0, user-scalable=0"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  router: {
    base: "/cms_template/"
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "@/static/transition.sass",
    "@/static/main.sass",
    "@/static/variables.scss"
    // '@/assets/css/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", "@/plugins/global.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        strategy: "prefix_and_default",
        detectBrowserLanguage: {
          alwaysRedirect: true,
          useCookie: true,
          cookieKey: "locale"
        },
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en",
            file: "en.js"
          },
          {
            name: "繁體中文",
            code: "zh",
            iso: "zh",
            file: "zh.js"
          },
          {
            name: "簡體中文",
            code: "cn",
            iso: "cn",
            file: "cn.js"
          }
        ],
        langDir: "lang/",
        lazy: true,
        defaultLocale: "en"
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  transition: {
    name: "test",
    mode: "out-in"
  }
};
