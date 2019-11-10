import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Colegio Anglo Americano',
    headerImage: require("@/assets/fotoHeaderHomeOsc.jpg"),
    description: '',
    descriptionColor: 'white'
  },
  mutations: {
    ACTUALIZA_TITULO_E_IMAGEN (state, payload){
      state.title = payload.title,
      state.headerImage = payload.img,
      state.description = payload.description,
      state.descriptionColor = payload.descriptionColor
    }
  },
  actions: {

  }
})
