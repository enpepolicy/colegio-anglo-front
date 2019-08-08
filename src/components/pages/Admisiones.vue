<template lang="html">
  <v-layout justify-center column>
    <h1 id='vista'></h1>
    <hr>
    <div class="" v-for='hola in elementosBody' >
      <h1>{{hola.content.title}}</h1>
      <p>{{hola.content.content}}</p>
    </div>
  </v-layout>
</template>

<script>
import { Storyblok, version } from '../../../storyblok.config'
import { mapMutations } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      payload: {
        title: '',
        img: ''
      },
      elementosBody: []
    }
  },
  methods: {
    ...mapMutations([
      'ACTUALIZA_TITULO_E_IMAGEN'
    ])
  },
  created: function () {
    Storyblok.get('cdn/stories', {
      version: version,
      starts_with: 'admisiones'
    })
    .then((response) => {
      this.payload.title = response.data.stories[0].content.title;
      this.payload.img = response.data.stories[0].content.image;
      for (var i = 1; i < response.data.stories.length; i++){
        this.elementosBody.push(response.data.stories[i])
      }
      this.ACTUALIZA_TITULO_E_IMAGEN(this.payload)
      //console.log(this.imagenHeader);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style lang="css" scoped>
</style>
