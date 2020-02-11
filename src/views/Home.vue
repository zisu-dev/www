<template>
  <v-container class="home">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="primary" dark class="vibrancy">
          <v-card-title>
            <div class="fill-width">
              <div class="text-uppercase font-italic font-weight-light subheading">Welcome to</div>
              <div class="text-right">ZhangZisu.CN</div>
            </div>
          </v-card-title>
          <v-alert v-model="ipv4Only" type="warning">
            IPv4-Only network detected.
          </v-alert>
          <v-card >
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="vibrancy">
          <v-card-title>Next</v-card-title>
          <v-list>
            <v-list-item :href="ipv4Only ? 'https://proxy-dt.zhangzisu.cn/cockpit' : 'https://dt.zhangzisu.cn/cockpit'" target="_blank">
              <v-list-item-avatar>
                <v-img src="https://cockpit-project.org/images/favicon.png"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Datacenter Cockpit</v-list-item-title>
                <v-list-item-subtitle>
                  {{ ipv4Only ? 'Proxied with Cloudflare' : 'IPv6 only' }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://www.pixiv.net/artworks/72072963" target="_blank">
              <v-list-item-avatar>
                <v-img src="https://s.pximg.net/common/images/apple-touch-icon.png"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Background Author</v-list-item-title>
                <v-list-item-subtitle>Hiten, Pixiv</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="vibrancy">
          <v-card-title>Build info</v-card-title>
          <v-list>
            <v-list-item :href="build.git" target="_blank">
              <v-list-item-icon>
                <v-icon>mdi-git</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>Git hash</v-list-item-subtitle>
                <v-list-item-title>
                  <code>{{ build.hash }}</code>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-server</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>Build machine</v-list-item-subtitle>
                <v-list-item-title>
                  <code>{{ build.machine }}</code>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>Build date</v-list-item-subtitle>
                <v-list-item-title>
                  <code>{{ build.date }}</code>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* global GIT_HASH, BUILD_DATE, BUILD_MACHINE */

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    build: {
      hash: GIT_HASH.substr(0, 6),
      git: `https://github.com/ZhangZisu/www/commit/${GIT_HASH}`,
      date: BUILD_DATE,
      machine: BUILD_MACHINE
    },
    ipv4Only: false,
    ipv6: ''
  }),
  methods: {
    async loadIPv6 () {
      try {
        this.ipv6 = await fetch('https://v6.ident.me').then(r => r.text())
      } catch (e) {
        this.ipv4Only = true
      }
    }
  },
  created () {
    this.loadIPv6()
  }
}
</script>

<style scoped>

</style>
