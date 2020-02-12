<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card color="primary" dark class="vibrancy">
          <v-card-title>
            <div class="fill-width">
              <div class="title">About me</div>
              <div class="subtitle-1 text-right">Zhang Zisu (张子苏)</div>
            </div>
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <p>
              <q>Being aware of death, then become aware of life.</q>
            </p>
          </v-card-text>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-cake-variant</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>2003/05</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="http://zhzx.net.cn/" target="_blank">
              <v-list-item-avatar>
                <v-icon>mdi-school</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Zhenhai High school</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="vibrancy" dark color="#3498db">
          <v-row justify="space-between">
            <v-col cols="auto">
              <div class="ml-4 mt-2">
                <div class="title">Contact</div>
              </div>
            </v-col>
            <v-col cols="auto">
              <v-avatar tile size="48" class="mr-2">
                <v-img :src="avatar"/>
              </v-avatar>
            </v-col>
          </v-row>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item href="mailto:admin@zhangzisu.cn">
              <v-list-item-avatar>
                <v-icon>mdi-email</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>admin@zhangzisu.cn</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://github.com/zhangzisu/" target="_blank">
              <v-list-item-avatar>
                <v-icon color="#181717">mdi-github-circle</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>ZhangZisu</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-qqchat</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>2807616946</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="vibrancy social-card" light>
          <v-card-title>Social</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item href="https://twitter.com/zisu_zhang" target="_blank">
              <v-list-item-avatar>
                <v-icon color="#1DA1F2">mdi-twitter</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>@zisu_zhang</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://t.me/zhangzisu" target="_blank">
              <v-list-item-avatar>
                <v-icon color="#2CA5E0">mdi-telegram</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>@zhangzisu</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="vibrancy">
          <v-card-title>About site</v-card-title>
          <v-divider/>
          <v-list>
            <v-subheader>Build info</v-subheader>
            <v-list-item :href="build.git" target="_blank">
              <v-list-item-icon>
                <v-icon color="#F05032">mdi-git</v-icon>
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
            <v-subheader>Built with</v-subheader>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#4FC08D">mdi-vuejs</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>Framwork</v-list-item-subtitle>
                <v-list-item-title>
                  <code>Vue</code>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#1867C0">mdi-vuetify</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>UI Components</v-list-item-subtitle>
                <v-list-item-title>
                  <code>Vuetify</code>
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
import gravatar from 'gravatar'

/* global GIT_HASH, BUILD_DATE, BUILD_MACHINE */

const email = 'admin@zhangzisu.cn'

export default {
  name: 'About',
  components: {
  },
  data: () => ({
    build: {
      hash: GIT_HASH.substr(0, 6),
      git: `https://github.com/ZhangZisu/www/commit/${GIT_HASH}`,
      date: BUILD_DATE,
      machine: BUILD_MACHINE
    },
    email,
    avatar: gravatar.url(email, { s: 128 })
  })
}
</script>

<style scoped>
.social-card {
  background-image: url(https://i.loli.net/2020/02/12/ipkf6whvJ48TI3K.png) !important;
  background-size: contain !important;
  background-position: right;
}
</style>
