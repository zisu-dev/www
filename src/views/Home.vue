<template>
  <v-container class="home">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#1976D2c0" dark>
          <v-card-title>
            <div class="fill-width">
              <div class="text-uppercase font-italic font-weight-light subtitle-1">
                {{ $t('welcome-title') }}
              </div>
              <div class="text-right display-1 font-weight-thin">ZhangZisu.CN</div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#FFFFFFc0">
          <v-card-title>{{ $t('next') }}</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item href="https://blog.zhangzisu.cn/" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Blog</v-list-item-title>
                <v-list-item-subtitle>
                  ZhangZisu.CN Blog
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://proxy.zhangzisu.cn/" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Proxy</v-list-item-title>
                <v-list-item-subtitle>
                  ZhangZisu.CN Proxy Services
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://status.zhangzisu.cn/" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Status</v-list-item-title>
                <v-list-item-subtitle>
                  ZhangZisu.CN Status
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <!-- <v-divider/>
          <v-card-actions>
            <v-spacer/>
            <div class="text-overline">Website thumbnails by <a href="https://pagepeeker.com/" target="_blank">PagePeeker.com</a></div>
          </v-card-actions> -->
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
