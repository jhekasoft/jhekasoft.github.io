<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <div class="album-cover">
              <img src="~/assets/images/albums/2019_vremya_o/cover_clean.jpg" />
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <h1>Билет 33</h1>
            <h2>Время О (EP, 2019)</h2>

            <div>Время — осень</div>
            <vuetify-audio
              file="/audio/albums/2019_vremya_o/VremyaO_track01.mp3"
            />
            <div>Троллейбус</div>
            <vuetify-audio
              file="/audio/albums/2019_vremya_o/VremyaO_track02.mp3"
            />
            <div>На Есенина</div>
            <vuetify-audio
              file="/audio/albums/2019_vremya_o/VremyaO_track03.mp3"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import VuetifyAudio from '~/components/VuetifyAudio.vue'
export default {
  components: {
    VuetifyAudio
  }
}
</script>

<style lang="scss" scoped>
.album-cover {
  img {
    max-width: 100%;
  }
}
</style>
