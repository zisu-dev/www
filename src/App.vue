<template>
  <v-app>
    <v-navigation-drawer app expand-on-hover disable-resize-watcher disable-route-watcher permanent :value="true">
      <v-list nav>
        <v-list-item to="/">
          <v-list-item-avatar tile size="24">
            <v-img contain :src="require('@/assets/logo.png')"/>
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
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/status">
          <v-list-item-avatar tile size="24px">
            <v-icon>mdi-traffic-light</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>CI</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-scroll-x-transition hide-on-leave>
        <router-view/>
      </v-scroll-x-transition>
    </v-content>
    <div id="background">
      <v-img src="/static/bg.png" height="100%"/>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.site-title {
  font-family: 'Cascadia Code', Consolas, 'Courier New', monospace
}
#background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
