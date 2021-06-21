export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Front-end Developer | Augusto Díaz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: '#0a0b35' },
      { hid: 'description', name: 'description', content: 'Desarollador Front-end con experiencia en una de las últimas tecnologías usadas actualmente.' },
      { property: 'og:https://augustodiaz.netlify.app/', content: 'Front-end Developer | Augusto Díaz' },
      { property: 'og:title', content: 'Portafolio' },
      { property: 'og:description', content: 'Desarollador Front-end con experiencia en una de las últimas tecnologías usadas actualmente.' },
      { property: 'og:image', content: 'https://i.ibb.co/XXRLCQz/logo24.png' },
      { property: 'type', content: 'blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo24.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&family=Inconsolata:wght@300&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/aos.client'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  target: 'static',

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
