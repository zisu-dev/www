<template>
  <v-footer dark app>
    <v-row justify="end" no-gutters>
      <v-col cols="12" sm="auto" class="text-right">
        <v-btn text disabled class="text-none" >
          &copy; {{ new Date().getFullYear() }} ZhangZisu
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn text href="https://buttercms.com" target="_blank" class="pa-0">
          <img src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo" height="36px">
        </v-btn>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon left>mdi-translate</v-icon>
              {{ $i18n.locale }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(lang , i) in langs" :key="i" @click="$i18n.locale = lang.code">
              <v-list-item-content>
                <v-list-item-title>{{ lang.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ lang.code }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn icon href="https://creativecommons.org/licenses/by-sa/" target="_blank" v-on="on">
              <v-icon>mdi-creative-commons</v-icon>
            </v-btn>
          </template>
          <span>BY-SA</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    langs: [
      { name: 'English', code: 'en' },
      { name: '简体中文', code: 'zh-Hans' }
    ]
  }),
  watch: {
    '$i18n.locale' () {
      localStorage.setItem('locale', this.$i18n.locale)
    }
  }
}
</script>
