<template>
  <v-layout>
    <v-flex class="text-center">
      <h1>Jhekasoft</h1>
      <h2>Eugen Efremov</h2>

      <v-avatar :tile="false" size="300px" color="grey lighten-4" class="mb-4 mt-4">
        <img
          src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
          alt="Eugen Efremov"
        />
      </v-avatar>

      <p>
        Web Developer. Kyiv, Ukraine. 🇺🇦
      </p>
      <p>
        Technologies that I preffer (technology stack):
      </p>
      <div class="text-xs-center">
        <v-chip v-for="(item, index) in technologies" :key="index" class="ma-1">
          <v-avatar v-if="item.icon">
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-avatar>
          {{ item.title }}
        </v-chip>
      </div>

      <p class="mt-4">
        Technologies that I used:
      </p>
      <div class="text-xs-center">
        <v-chip v-for="(item, index) in usedTechnologies" :key="index" class="ma-1">
          <v-avatar>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-avatar>
          {{ item.title }}
        </v-chip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    technologies: [
      { title: 'JavaScript', icon: 'mdi-language-javascript', color: '#F7DF31' },
      { title: 'node.js', icon: 'mdi-nodejs', color: '#639A58' },
      { title: 'Vue.js', icon: 'mdi-vuejs', color: '#5BB884' },
      { title: 'Nuxt.js', icon: 'mdi-nuxt', color: '#62C68F' },
      { title: 'Go', icon: 'mdi-language-go', color: '#49ACD7' },
      { title: 'Scala', icon: null, color: '#49ACD7' },
      { title: 'GNU/Linux', icon: 'mdi-linux', color: '#F7BD33' }
    ],
    usedTechnologies: [
      { title: 'PHP', icon: 'mdi-language-php', color: '#777BB3' },
      { title: 'Laravel', icon: 'mdi-laravel', color: '#EA4D39' },
      { title: 'Symfony', icon: 'mdi-symfony', color: '#000000' },
      { title: 'Zend Framework', icon: 'mdi-zend', color: '#68B604' },
      { title: 'Python', icon: 'mdi-language-python', color: '#F7BD33' },
      { title: 'C++', icon: 'mdi-language-cpp', color: '#15599C' },
      { title: 'C', icon: 'mdi-language-c', color: '#A8B9CC' },
      { title: 'Lua', icon: 'mdi-language-lua', color: '#0A2180' }
    ]
  }),
  head() {
    return {
      title: 'jhekasoft',
      titleTemplate: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
