import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'hola bitches',
    headerImage: require("@/assets/fotoHeaderHomeOsc.jpg")
  },
  mutations: {
    ACTUALIZA_TITULO_E_IMAGEN (state, payload){
      state.title = payload.title,
      state.headerImage = payload.img
    }
  },
  actions: {

  }
})
