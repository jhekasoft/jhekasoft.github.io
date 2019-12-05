<template>
  <v-layout>
    <v-flex>
      <h1>Developer timeline</h1>
      <v-timeline align-top :dense="isMount && $vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in list"
          :key="i"
          color="teal darken-3"
          fill-dot
        >
          <v-card>
            <v-card-title class="headline">{{ item.year }}</v-card-title>
            <v-card-text style="font-size: 1.4em; line-height: 1.4em;">
              <div v-for="(descItem, j) in item.desc" :key="j">
                <span
                  v-html="
                    descItem.replace(
                      /\*\*(\S(.*?\S)?)\*\*/gm,
                      '<strong class=\'teal--text\'>$1</strong>'
                    )
                  "
                ></span>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
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
    console.log(payload)
    if (payload) return { list: payload.data }

    const { data } = await axios.get(
      process.env.apiBaseUrl + 'developer-timeline',
      { params: { reverse: '0' } }
    )
    return { list: data.data }
  },
  mounted() {
    this.isMount = true
  }
}
</script>

<style lang="scss" scoped></style>
