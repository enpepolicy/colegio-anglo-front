import Vue from 'vue'
import Router from 'vue-router'
/*Componentes*/
import home from './components/home'
import ERR404 from './components/ERR404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '*',
      component: ERR404
    }
  ],
  /*Hace que las rutas aparezcan sin #*/
  mode: 'history'
})
