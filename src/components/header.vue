<template>
  <v-layout
  id="caja"
  column
  :style="`
  background: linear-gradient(to bottom, rgba(12,22,66,0.75) , rgba(12,22,66,0.75)), url(${headerImage});
  `"
  class="imagenHeader">

    <v-layout justify-space-between row wrap mx-5 mt-5>
      <v-layout justify-center md4 xs12 mb-5>
          <v-img
            min-width="140px"
            max-width="200px"
            max-height="200px"

            :src="require('../assets/logo.svg')"
            alt="Logo Colegio Anglo Americano"
            contain
          ></v-img>
      </v-layout>
      <v-flex md8 xs12>
        <v-tabs color="transparent" show-arrows dark grow right slider-color="white">
          <v-tab to="/" >
            Inicio
          </v-tab>
          <v-tab to="/admisiones">
            Admisiones
          </v-tab>
          <v-tab to="/organizacion">
            Organización
          </v-tab>
          <v-tab to="/departamentos">
            Departamentos
          </v-tab>
          <v-tab to = "/icfes">
            Icfes
          </v-tab>
          <v-tab to = "/pagos">
            Pagos
          </v-tab>
        </v-tabs>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around >
      <v-flex xs8>
        <h1 id="titulo">{{ title }}</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around >
      <v-flex xs8 sm6>
        <h3
        class="tituloTexto"
        :style="`
          color:${descriptionColor} !important
        `">
          {{ description }}
        </h3>
      </v-flex>
    </v-layout>
    <v-layout align-end justify-center row  mb-4>
      <v-btn fab outline dark id="btnFlecha" v-scroll-to="'#vista'">
        <v-icon >expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function(){
    return {
    }
  },
  computed: {
    ...mapState([
      'title',
      'headerImage',
      'description',
      'descriptionColor'
    ])
  }
}
</script>

<style lang="css" scoped>
#titulo{
  text-align: center;
  font-weight:600
}

@media only screen and (min-width : 961px){
  h1{
    font-size: 8vh
  }
  .tituloTexto{
    font-size: 2.7em !important

  }
}
@media only screen and (max-width : 960px){
  h1{
    font-size: 4vh
  }
  .tituloTexto{
    font-size: 1.2em !important
  }
}

h1{
  color: white;
  font-family: 'Nunito';
  font-weight: 100;
}
#btnFlecha{

}
#caja{
  height: 100vh;
  /* background-image: url('~@/assets/fotoHeaderHomeOsc.jpg'); */
  /* background-size: cover; */
}
a{
  color: grey;
  text-decoration: none !important
}
.imagenHeader{
  background-size:cover !important
}
.tituloTexto{
  font-weight: 200;
  color: white !important;
  font-size: 1.5em

}
</style>
