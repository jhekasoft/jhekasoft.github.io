<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="teal darken-4"
      dark
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="about.avatarUrl"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ about.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ about.nickname }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          nuxt
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <!-- <v-divider></v-divider>
        <v-list-group
          prepend-icon="translate"
          :value="false"
          nuxt
        >
          <template v-slot:activator>
            <v-list-item-title>Lang</v-list-item-title>
          </template>
          <v-list-item
            v-for="item in availableLocales"
            :key="item.code"
            :to="switchLocalePath(item.code)"
            nuxt
            exact
            :disabled="item.disabled"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dark color="teal darken-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon :href="about.telegramUrl" target="_blank" title="Telegram">
        <v-icon>mdi-telegram</v-icon>
      </v-btn>
      <v-btn icon :href="about.gitHubUrl" target="_blank" title="GitHub">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2013-{{ currentYear }} jhekasoft</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Main',
          to: 'index'
        },
        {
          icon: 'mdi-file-account',
          title: 'CV',
          to: 'cv'
        },
        {
          icon: 'mdi-timeline',
          title: 'Timeline',
          to: 'timeline'
        }
        // {
        //   icon: 'mdi-newspaper',
        //   title: 'Publications',
        //   to: 'publications'
        // },
        // {
        //   icon: 'mdi-format-list-bulleted',
        //   title: 'Projects',
        //   to: 'projects'
        // },
        // {
        //   icon: 'mdi-information',
        //   title: 'About',
        //   to: 'about'
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Jhekasoft',
      about: {
        nickname: 'jhekasoft',
        name: 'Eugen Efremov',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/1534306?s=460&v=4',
        gitHubUrl: 'https://github.com/jhekasoft',
        telegramUrl: 'https://t.me/jhekasoft'
      },
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.map((i) => {
        return {
          code: i.code,
          name: i.name,
          disabled: i.code == this.$i18n.locale
        }
      })
      // return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
}
</script>
