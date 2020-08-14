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
      titleTemplate: (title) => title ? `${title} - Testando InertiaJS` : 'Testando InertiaJS',
      meta: [
        { name: 'description', content: 'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.' },
        { property: 'og:title', content: "Epiloge - Build your network in your field of interest" },
        { property: 'og:site_name', content: 'Epiloge' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
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
