<template>
  <v-layout>
    <v-flex>
      <h1>Experience</h1>
      <div v-if="isMount">
        <v-timeline align-top :dense="isMount && $vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in data.experience"
            :key="i"
            color="teal darken-3"
            fill-dot
          >
            <v-card>
              <v-card-title class="headline headline-mono">
                <template v-if="item.endYear == null">
                  {{ item.startYear }} – Present
                </template>
                <template
                  v-else-if="item.startYear == item.endYear || item.endYear == null"
                >
                  {{ item.startYear }}
                </template>
                <template v-else>
                  {{ item.startYear }} – {{ item.endYear }}
                </template>
              </v-card-title>
              <v-card-text>
                <div style="font-size: 1.4em; line-height: 1.4em;">
                  <a
                    v-if="item.companyUrl"
                    :href="item.companyUrl"
                    target="__blank"
                  >
                    {{ item.company }}
                  </a>
                  <span v-else class="teal--text">
                    {{ item.company }}
                  </span>
                </div>
                <div>
                  <strong>{{ item.title }}</strong>
                </div>
                <div>
                  {{ item.location }}
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <h2 class="text-md-center">Education</h2>
        <v-timeline align-top :dense="isMount && $vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in data.education"
            :key="i"
            color="teal darken-3"
            fill-dot
          >
            <v-card>
              <v-card-title class="headline headline-mono">{{ item.startYear }} – {{ item.endYear }}</v-card-title>
              <v-card-text>
                <div style="font-size: 1.4em; line-height: 1.4em;">
                  {{ item.school }}
                </div>
                <div>
                  <strong>{{ item.degree }}</strong>
                </div>
                <div>
                  {{ item.fieldOfStudy }}
                </div>
                <div>
                  {{ item.location }}
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

    const { data } = await axios.get(process.env.apiBaseUrl + 'cv')
    return { data: data.data }
  },
  mounted() {
    this.isMount = true
  },
  head() {
    return {
      title: 'Experience'
    }
  }
}
</script>

<style lang="scss" scoped></style>
