import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueScrollTo from 'vue-scrollto'
import VueYoutube from 'vue-youtube'

Vue.use(Vuetify, {
  iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.config.productionTip = false
Vue.use(VueScrollTo, {
 container: "body",
 duration: 1500,
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
Vue.use(VueYoutube)

router.afterEach((to) => {
  gtag('config', window.GA_TRACKING_ID, {
    page_path: to.fullPath,
    send_page_view: true,
  });
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
