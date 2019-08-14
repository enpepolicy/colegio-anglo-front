<template lang="html">
  <v-layout align-center justify-center ma-5 column fill-height>


    <v-card
    flat
    >
      <v-card-title>
      <h1>
        Upss... <br>
        No hemos encontrado la pagina solicitada<br>
        Err: 404
      </h1>
      </v-card-title>
    </v-card>

    <v-icon size="15em" color="#f2f2f2">not_interested</v-icon>

    <v-flex>
      <v-btn
      to="/"
      color="#333366"
      dark
      round
      >
        Volver a Inicio
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css">
h1{
  text-align: center;
}
</style>
