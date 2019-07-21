<template>
  <v-app>
    <VueScrollProgress></VueScrollProgress>
    <Header></Header>

    <router-view id='vista'>
    </router-view>

  </v-app>
</template>

<script>
import Header from "./components/header"

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="css" >
#app{
  background-image: url('~@/assets/punticos2.svg');
  background-repeat: no-repeat;
  background-size: 50%;

  
  background-color: white;
  font-family: 'Nunito Sans', sans-serif;
  font-family: 'Nunito', sans-serif;
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
</style>
