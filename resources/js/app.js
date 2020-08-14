import jquery from 'jquery';
// import 'bootstrap';

import Vue from 'vue'
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue'
import { InertiaApp } from '@inertiajs/inertia-vue'

import 'bootstrap/dist/css/bootstrap.min.css';

window.$ = jquery;

import 'bootstrap';

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })
Vue.use(InertiaApp)
Vue.use(PortalVue)
Vue.use(VueMeta)

let app = document.getElementById('app')

new Vue({
  metaInfo() {
    return {
      title: 'Testando InertiaJS',
      titleTemplate: (title) => title ? `${title} - Testando InertiaJS` : 'Testando InertiaJS',
      meta: [
        { name: 'description', content: 'Testando e implemtando SPA com InertiaJS, Vue e Laravel.' },
        { name: 'robots', content: 'index,follow' },

        // facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: "Testando InertiaJS" },
        { property: 'og:description', content: "Testando InertiaJS" },
        { property: 'og:image', content: "Testando InertiaJS" },
        { property: 'og:url', content: "Testando InertiaJS" },
        { property: 'og:site_name', content: 'Testando InertiaJS' },

        // twitter
        { name: 'twitter:url', content: 'website' },
        { name: 'twitter:title', content: "Testando InertiaJS" },
        { name: 'twitter:description', content: "Testando InertiaJS" },
        { name: 'twitter:image', content: "Testando InertiaJS" },
      ]
    }
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)
