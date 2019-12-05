<template>
  <v-layout>
    <v-flex>
      <h1>Developer timeline</h1>
      <v-timeline align-top :dense="isMount && $vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          fill-dot
        >
          <v-card>
            <v-card-title class="headline">{{ item.title }}</v-card-title>
            <v-card-text style="font-size: 1.4em; line-height: 1.4em;">
              <div v-html="item.text"></div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    isMount: false,
    items: [
      {
        color: 'teal darken-4',
        title: '2003',
        text:
          '<strong class="teal--text">Sinclair BASIC</strong>, ZX Spectrum<br>' +
          'MS Windows<br>' +
          '<strong class="teal--text">Turbo Pascal</strong>, MS DOS'
      },
      {
        color: 'teal darken-4',
        icon: 'mdi-book-variant',
        title: '2004',
        text:
          '<strong class="teal--text">Visual Basic</strong>, Windows<br>' +
          '<strong class="teal--text">Borland Delphi</strong><br>' +
          'Borland Database Engine (СУБД)'
      },
      {
        color: 'teal darken-4',
        icon: 'mdi-airballoon',
        title: '2005',
        text: 'Test'
      },
      {
        color: 'teal darken-3',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-3',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-3',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-2',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-2',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-2',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-1',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-1',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal darken-1',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal lighten-1',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      },
      {
        color: 'teal lighten-1',
        icon: 'mdi-buffer',
        title: '2006',
        text: 'Test'
      }
    ]
  }),
  mounted() {
    this.isMount = true
  }
}
</script>

<style lang="scss" scoped></style>
