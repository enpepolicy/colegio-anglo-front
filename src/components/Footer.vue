<template lang="html">

  <v-card
  flat
  max-width="900"
  class="mx-auto"
  color="#f2f2f2"
  >
    <v-layout align-center fill-height column my-5>
      <h1>COLEGIO ANGLO AMERICANO</h1>

      <p>Calendario A - Mixto - International Double Degree</p>
      <p>Calle 170 No. 8-80/70 - Bogotá - Colombia - Tel.: 6694181</p>
      <p>E-mail: colegio@caa.edu.co</p>

      <p id="hecho">Hecho en Colombia</p>
    </v-layout>
  </v-card>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h1{
  text-align: center;
  color: #333366;
  font-weight: 800;
  margin-bottom: 0.5em;
}
p{
  text-align: center;
  color: #333366;
  font-weight: 500;
  margin-bottom: 0.5em;
}
#hecho{
  margin-top: 3em;
  font-size: 1em;
  font-weight: 800;
  color: #999999;
}
.v-card{
  padding: 2em
}
</style>
