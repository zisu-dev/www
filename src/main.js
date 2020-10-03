import Vue from 'vue'
import './domain'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import '@/plugins/gtag'
import i18n from '@/plugins/i18n'
import router from '@/router'
import '@/sass/main.scss'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
