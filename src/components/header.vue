<template>
  <v-layout id="caja" column :style="{backgroundImage: `url(${headerImage})` }" >

    <v-layout justify-space-between row wrap ma-5>
      <v-layout justify-center md4 xs12 mb-5>
          <v-img
            min-width="140px"
            max-width="250px"
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
          <v-tab to="/cursos">
            Cursos
          </v-tab>
          <v-tab to="/departamentos">
            Departamentos
          </v-tab>
          <v-tab to = "/icfes">
            Icfes
          </v-tab>
        </v-tabs>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around >
      <v-flex xs8>
        <h1 id="titulo">{{ title }}</h1>
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
      menu: "Colegio Anglos Americano",
      tituloPrincipal: '',
      imagenHeader: ''
    }
  },
  computed: {
    ...mapState([
      'title',
      'headerImage'
    ])
  }
}
</script>

<style lang="css" scoped>
#titulo{
  text-align: center;
}
h1{
  color: white;
  font-size: 6vh;
  font-family: 'Nunito';
  font-weight: 100;
}
#btnFlecha{

}
#caja{
  height: 100vh;
  /* background-image: url('~@/assets/fotoHeaderHomeOsc.jpg'); */
  background-size: cover;
}
a{
  color: grey;
  text-decoration: none !important
}
</style>
