<template>
  <v-container class="home">
    <v-row justify="center" v-show="mainlandChina">
      <v-col cols="12" sm="6" md="4">
        <v-alert prominent v-model="mainlandChina" type="error" class="ma-0">
          <div class="subtitle-1">Your're in mainland China.</div>
          <div class="caption">
            Due to the network restrictions,
            <ul>
              <li>The site will switch to mainland China servers when possible;</li>
              <li>Some function will be disabled;</li>
              <li>However, you may still experience slow performance.</li>
            </ul>
            If you have already using a bypass service,
            <a href="https://zhangzisu.cn">click here.</a>
          </div>
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center" v-show="ipv4Only">
      <v-col cols="12" sm="6" md="4">
        <v-alert prominent v-model="ipv4Only" type="warning" class="ma-0">
          <div class="subtitle-1">IPv4-Only network detected.</div>
          <div class="caption">
            <ul>
              <li>Some server will become inaccessible;</li>
              <li>Some server will use proxy;</li>
              <li>You may experience performance downgrade.</li>
            </ul>
            Please contact your ISP for IPv6 support.
          </div>
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="primary" dark class="vibrancy">
          <v-card-title>
            <div class="fill-width">
              <div class="text-uppercase font-italic font-weight-light subtitle-1">Welcome to</div>
              <div class="text-right">ZhangZisu.CN</div>
            </div>
          </v-card-title>
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
  </v-container>
</template>

<script>
/* global MAINLAND_CHN */

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    ipv4Only: false,
    ipv6: '',
    mainlandChina: MAINLAND_CHN
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
