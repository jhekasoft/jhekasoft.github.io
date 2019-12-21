<template>
  <v-layout>
    <v-flex>
      <h1 class="ccc666">Own projects</h1>
      <div v-if="isMount">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="(item, i) in data.softwareProjects"
              :key="i"
              xs12
              sm4
            >
              <v-card>
                <v-img src="https://s.dou.ua/img/announces/Untitled_design-3.png" />
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      {{ item.title }}
                      <span class="grey--text">{{ item.year }}</span>
                    </div>
                  </div>
                </v-card-title>
                <v-card-text>
                  {{ item.desc }}
                </v-card-text>

                <v-card-actions>
                  <v-btn  color="teal darken-3" :href="item.url" target="_blank">Show</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    isMount: false
  }),
  async asyncData({ params, error, payload }) {
    // console.log(payload)
    if (payload) return { list: payload.data }

    const { data } = await axios.get(
      process.env.apiBaseUrl + 'cv',
      { params: { reverse: '0' } }
    )
    return { data: data.data }
  },
  mounted() {
    this.isMount = true
  },
  head() {
    return {
      title: 'Own projects'
    }
  }
}
</script>

<style lang="scss" scoped></style>
