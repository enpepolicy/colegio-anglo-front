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
          <v-tab v-on:click="menu = 'Bienvenido'" to="/" >
            Inicio
          </v-tab>
          <v-tab v-on:click="menu = '¿Quieres conocernos?'" to="/admisiones">
            Admisiones
          </v-tab>
          <v-tab v-on:click="menu = 'Cursos de punta para tus hijos'" to="/cursos">
            Cursos
          </v-tab>
          <v-tab v-on:click="menu = '¿Cómo nos organizamos?'" to="/departamentos">
            Departamentos
          </v-tab>
          <v-tab v-on:click="menu = 'Nos preparamos para los examenes SABER'" to = "/icfes">
            Icfes
          </v-tab>
        </v-tabs>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around >
      <v-flex xs8>
        <h1 id="titulo">{{menu}}</h1>
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
export default {
  data: function(){
    return {
      menu: "Colegio Colombo Americano"
    }
  },
  methods:{
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
  background-image: url('~@/assets/fotoHeaderHomeOsc.jpg');
  background-size: cover;
}
a{
  color: grey;
  text-decoration: none !important
}
</style>
