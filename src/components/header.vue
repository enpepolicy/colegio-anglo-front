<template>
  <v-layout id="caja" column>

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
          <v-tab >
            <router-link to="/">Inicio</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/admisiones">Admisiones</router-link>
          </v-tab>
          <v-tab>
            <router-link to="cursos">Cursos</router-link>
          </v-tab>
          <v-tab>
            <router-link to="departamentos">Departamentos</router-link>
          </v-tab>
          <v-tab>
            <router-link to="icfes">Icfes</router-link>
          </v-tab>
        </v-tabs>
      </v-flex>
    </v-layout>
    <v-layout align-end justify-center row fill-height mb-4>
      <v-btn fab outline dark id="btnFlecha" v-scroll-to="'#vista'">
        <v-icon >expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style lang="css" scoped>
#btnFlecha{

}
#caja{
  height: 100vh;
  background-image: url('~@/assets/fotoHeaderHomeOsc.jpg');
  background-size: cover;
}
a{
  color: grey;
  text-decoration: none !important
}
</style>
