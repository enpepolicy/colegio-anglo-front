<template>
  <v-app>
    <VueScrollProgress/>

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
<style lang="css" >
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
#progress-container-el {
  /* background */
  background-color: transparent !important;
  bottom: calc(100% - 4px) !important;
}
#progress-el {
  /* progress bar */
  background-color:#a1091f !important;
}
p{
  font-size: 1.5em
}
</style>
