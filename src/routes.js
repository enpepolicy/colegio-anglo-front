import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Inicio from './components/pages/Inicio'
import Admisiones from './components/pages/Admisiones'
import Departamentos from './components/pages/Departamentos'
import Icfes from './components/pages/Icfes'
import Organizacion from './components/pages/Organizacion'
import Pagos from './components/pages/Pagos'
import ERR404 from './components/pages/ERR404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Admisiones',
      name: 'Admisiones',
      component: Admisiones
    },
    {
      path: '/Departamentos',
      name: 'Departamentos',
      component: Departamentos
    },
    {
      path: '/Icfes',
      name: 'Icfes',
      component: Icfes
    },
    {
      path: '/Organizacion',
      name: 'Organizacion',
      component: Organizacion
    },
    {
      path: '/Pagos',
      name: 'Pagos',
      component: Pagos
    },
    {
      path: '*',
      component: ERR404
    }
  ],
  // Define ruta base de pruebas (cambiar junto a publicPath en el vue config)
  base: "/colegio-anglo-front/",
  /*Hace que las rutas aparezcan sin #*/
  mode: 'history'
})
