<template>
  <v-container class="home">
    <v-scroll-x-transition>
      <v-row justify="center" v-show="mainlandChina">
        <v-col cols="12" sm="6" md="4">
          <v-alert prominent v-model="mainlandChina" type="error" class="ma-0" dismissible>
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
    </v-scroll-x-transition>
    <v-scroll-x-transition>
      <v-row justify="center" v-show="ipv4Only">
        <v-col cols="12" sm="6" md="4">
          <v-alert prominent v-model="ipv4Only" type="warning" class="ma-0" dismissible>
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
    </v-scroll-x-transition>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#1976D2c0" dark>
          <v-card-title>
            <div class="fill-width">
              <div class="text-uppercase font-italic font-weight-light subtitle-1">Welcome to</div>
              <div class="text-right display-1 font-weight-thin">ZhangZisu.CN</div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>Next</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item href="https://zlog.zhangzisu.cn/" target="_blank">
              <v-list-item-avatar tile>
                <v-img :src="require('@/assets/logo.svg')" contain/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Notebook</v-list-item-title>
                <v-list-item-subtitle>
                  Powered by ZLog
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
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
