<template>
  <v-app class="acrylic">
    <v-app-bar app dark>
      <v-btn icon tile x-large @click="drawer = !drawer">
        <v-avatar tile size="32">
          <v-img src="@/assets/logo.svg" class="logo" />
        </v-avatar>
      </v-btn>
      <v-btn text x-large class="pa-0 text-center" to="/">
        <div class="ma-2">
          <div class="font-weight-bold">ZhangZisu.CN</div>
          <div class="text-overline" style="line-height: unset;">
            Index
          </div>
        </div>
      </v-btn>
      <v-spacer/>
      <user-indicator/>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav>
        <v-list-item to="/about">
          <v-list-item-avatar tile size="24px">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('about') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/status">
          <v-list-item-avatar tile size="24px">
            <v-icon>mdi-traffic-light</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('ci-status') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-scroll-x-transition hide-on-leave>
        <router-view/>
      </v-scroll-x-transition>
    </v-main>
    <app-footer/>
    <div id="background">
      <v-img src="https://i.loli.net/2020/10/03/sMTDHWquvjmNwG7.png" height="100%"/>
    </div>
  </v-app>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import UserIndicator from '@/components/UserIndicator.vue'

export default {
  name: 'App',
  components: {
    AppFooter,
    UserIndicator
  },
  data: () => ({
    drawer: undefined
  })
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

.theme--dark .logo {
  filter: invert(1);
}
</style>
