import Vue from 'vue'
import App from './App.vue'
import vueHeadful from 'vue-headful';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from 'aos'
import "aos/dist/aos.css"

var VueScrollTo = require('vue-scrollto')

Vue.config.productionTip = false
Vue.component('vue-headful', vueHeadful);
Vue.use(VueScrollTo, {
     container: "body",
     duration: 2000,
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
 Vue.use(AOS)

new Vue({
  created() {
    AOS.init({ disable: "false" })
  },
  render: h => h(App),
}).$mount('#app')
