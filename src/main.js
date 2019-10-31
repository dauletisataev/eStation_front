import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { store } from './store'
import Header from './components/Header.vue'

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

Vue.component('v-select', vSelect)
Vue.component('Header', Header)

// You can also pass in the default options
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
