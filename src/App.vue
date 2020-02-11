<template>
  <v-app class="vibrancy">
    <v-navigation-drawer app expand-on-hover disable-resize-watcher disable-route-watcher permanent :value="true" class="vibrancy">
      <v-list nav>
        <v-list-item to="/">
          <v-list-item-avatar tile size="24">
            <img :src="require('@/assets/logo.svg')"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-avatar tile size="24px">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>About me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <div class="background" ref="background">
      <div class="layer">
        <div class="background-img"/>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  methods: {
  },
  created () {
  },
  beforeDestroy () {
  }
}
</script>

<style scoped>
.site-title {
  font-family: 'Courier New', Courier, monospace
}
</style>
