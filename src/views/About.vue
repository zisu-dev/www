<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card color="#1976D2c0" dark>
          <v-card-title>
            <div class="fill-width">
              <div class="title">{{ $t('about-me') }}</div>
              <div class="subtitle-1 text-right">Zhang Zisu - 张子苏</div>
            </div>
          </v-card-title>
          <v-divider/>
          <v-card-text class="text-center text-uppercase motto">
            {{ $t('moto') }}
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
        <v-card dark color="#3498dbc0">
          <v-row justify="space-between">
            <v-col cols="auto">
              <div class="ml-4 mt-2">
                <div class="title">{{ $t('contact') }}</div>
              </div>
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
                <v-icon color="#181717">mdi-github</v-icon>
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
        <v-card color="#FFFFFFc0">
          <v-card-title>{{ $t('social') }}</v-card-title>
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
        <v-card color="#FFFFFFc0">
          <v-card-title>{{ $t('about-site') }}</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-subheader>{{ $t('build-info') }}</v-subheader>
            <v-list-item :href="build.git" target="_blank">
              <v-list-item-icon>
                <v-icon color="#F05032">mdi-git</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>{{ $t('git-hash') }}</v-list-item-subtitle>
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
                <v-list-item-subtitle>{{ $t('build-machine') }}</v-list-item-subtitle>
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
                <v-list-item-subtitle>{{ $t('build-date') }}</v-list-item-subtitle>
                <v-list-item-title>
                  <code>{{ build.date }}</code>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-subheader>{{ $t('built-with') }}</v-subheader>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#4FC08D">mdi-vuejs</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>{{ $t('framework') }}</v-list-item-subtitle>
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
                <v-list-item-subtitle>{{ $t('ui-components') }}</v-list-item-subtitle>
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
import { gravatarURL } from '@/plugins/mlc'

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
    avatar: gravatarURL(email, 128)
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');

.motto {
  font-family: 'Slabo 27px', serif;
  color: #FFF !important;
  font-size: 2em;
}
</style>
