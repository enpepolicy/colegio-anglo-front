<template lang="html">
  <v-layout justify-center column>

    <v-container id='vista' grid-list-xl>
      <v-layout wrap justify-space-around align-center >
        <v-flex
        my-4
        md5
        xl5
        v-for="(info, i) in infos"
        :key="i">
          <v-card
          flat
          v-if="i%2 === 0"
          color="#f2f2f2"
          >
            <v-img
              class="white--text"
              height="200px"
              v-bind:src="info.content.image"
            />
            <v-card-title>{{info.content.title}}</v-card-title>
            <v-card-text>{{info.content.content}}</v-card-text>
          </v-card>
          <v-card
          flat
          v-else
          color="transparent"
          >
            <v-img
              class="white--text"
              height="200px"
              v-bind:src="info.content.image"
            />
            <v-card-title>{{info.content.title}}</v-card-title>
            <v-card-text>{{info.content.content}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

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
      infos: []
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
        if(response.data.stories[i].content.tag == 'info'){
          this.infos.push(response.data.stories[i])
        }
      }
      this.ACTUALIZA_TITULO_E_IMAGEN(this.payload)
      // console.log(this.cards);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style lang="css" scoped>
h1{
  color: #333366;
  text-align: center;
  font-size: 3em;
  font-weight: 100;
  line-height: normal;
}
.title_bold{
  font-weight: 800;

}
.v-card__title{
  color: #333366;
  font-weight: 800;
  font-size: 2em;
}
.v-card__text{
  font-size: 20px,
}
</style>
