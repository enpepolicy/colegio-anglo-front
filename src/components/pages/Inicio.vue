<template lang="html">
  <v-layout justify-center column>
    <v-container id='vista' grid-list-xl>
      <v-layout wrap justify-space-around align-center >
        <v-flex
        my-4
        md5
        xl5
        v-for="(level, i) in levels"
        :key="i">
          <v-card
          flat
          color="transparent"
          >
            <v-img
              class="white--text"
              height="200px"
              v-bind:src="level.content.image"
            >
            </v-img>
            <v-card-title>{{level.content.title}}</v-card-title>
            <v-card-text>{{level.content.content}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout id="container_video" justify-center pa-3 >
      <v-flex
      xl8>
        <youtube :video-id="youtubeId" :player-vars="playerVars" :fitParent="true" :resize="true" ></youtube>
      </v-flex>
    </v-layout>

    <v-container grid-list-xl>
      <v-layout wrap justify-space-around align-center >
        <v-flex
        xs12
        my-5>
          <h1>Lo que ofrecemos a <span class="title_bold">nuestra comunidad</span></h1>
        </v-flex>
        <v-flex
        md6
        lg4
        v-for="(card, i) in cards"
        :key="i">
          <v-card
          :href="card.content.url.url"
          flat
          color="transparent">

          <v-layout align-center fill-height justify-start mx-3>
              <v-img
              v-bind:src="card.content.icon"
              height="3em"
              max-width="3em"
              contain
              />


            <v-card-title>
              {{card.content.title}}
            </v-card-title>
          </v-layout>

            <!-- <v-layout justify-space-between align-left>
              <v-img
              v-bind:src="card.content.icon"
              max-height="1.5em"
              contain
              />
              {{card.content.title}}
            </v-layout> -->

            <v-card-text>{{card.content.description}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-layout>
</template>

<script>
import { Storyblok, version } from '../../../storyblok.config'
import { mapMutations } from 'vuex'
import { getIdFromUrl } from 'vue-youtube'

export default {
  components: {
  },
  data () {
    return {
      payload: {
        title: '',
        img: ''
      },
      levels: [],
      cards: [],
      youtubeId: '',
      playerVars: {
        autoplay: 0,
        controls: 2,
        modestbranding: 1,
        rel: 0,
        showinfo: 0
      }
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
      starts_with: 'home'
    })
    .then((response) => {
      this.payload.title = response.data.stories[0].content.title;
      this.payload.img = response.data.stories[0].content.image;

      for (var i = 1; i < response.data.stories.length; i++){
        if(response.data.stories[i].content.tag == 'level'){
          this.levels.push(response.data.stories[i])
        }
        else if (response.data.stories[i].content.tag == 'youtube') {
          let youtubeId = getIdFromUrl("https://www.youtube.com/watch?v=vlDzYIIOYmM");
          this.youtubeId = youtubeId;
        }
        else if (response.data.stories[i].content.tag == 'card') {
          this.cards.push(response.data.stories[i])
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
#container_video{
  background-color: #f2f2f2
}
</style>
