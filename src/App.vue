<template>
  <v-app>

    <vue100vh :css="{height: '100rvh'}">
      <Header/>
    </vue100vh>

    <v-container id='content'>
      <router-view/>
    </v-container>
    <v-container >
      <Footer/>
    </v-container>

  </v-app>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

import vue100vh from 'vue-100vh'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    vue100vh
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss" >
#content{
  padding: 0
}
#app{
  font-family: 'Nunito Sans', sans-serif;
  font-family: 'Nunito', sans-serif;
  background-image: url('~@/assets/fondo.svg');
  background-color: white;
  background-size: 60em;
}
p{
  font-size: 1.5em
}
// .v-card > .v-image:hover{
//   transform: scale(1.08);
//   transition: transform .25s, visibility .25s ease-in;
// }
.v-card:hover{
  transform: scale(1.07);
  .v-image{
    transform: scale(1.03);
    transition: transform .25s, visibility .25s ease-in-out;
  }
}
</style>
