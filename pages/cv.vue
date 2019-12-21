<template>
  <v-layout>
    <v-flex>
      <h1>CV</h1>
      <div v-if="isMount">
        <h2>Experience</h2>
        <v-timeline align-top :dense="isMount && $vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in data.experience"
            :key="i"
            color="teal darken-3"
            fill-dot
          >
            <v-card>
              <v-card-title class="headline">{{ item.startYear }}-{{ item.endYear }}</v-card-title>
              <v-card-text>
                <div style="font-size: 1.4em; line-height: 1.4em;">
                  {{ item.title }}
                </div>
                <div>
                  <a :href="item.companyUrl" target="__blank">{{ item.company }}</a>
                </div>
                <div>
                  {{ item.location }}
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <h2>Education</h2>
        <v-timeline align-top :dense="isMount && $vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in data.education"
            :key="i"
            color="teal darken-3"
            fill-dot
          >
            <v-card>
              <v-card-title class="headline">{{ item.startYear }}-{{ item.endYear }}</v-card-title>
              <v-card-text>
                <div style="font-size: 1.4em; line-height: 1.4em;">
                  {{ item.school }}
                </div>
                <div>
                  {{ item.degree }}
                </div>
                <div>
                  {{ item.fieldOfStudy }}
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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
      title: 'CV'
    }
  }
}
</script>

<style lang="scss" scoped></style>
