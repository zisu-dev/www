<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#3498db" dark class="vibrancy">
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-avatar tile class="ma-2" size="64">
                <v-img :src="avatar"/>
              </v-avatar>
            </v-col>
            <v-col cols="auto">
              <div class="text-right pa-2">
                <div class="headline">张子苏</div>
                <div class="subheading" style="font-family: monospace">zhangzisu</div>
              </div>
            </v-col>
          </v-row>
          <v-divider/>
          <v-card-text>
            Being aware of death, then become aware of life.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="vibrancy">
          <v-list>
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
                <v-list-item-title>镇海中学</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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
                <v-icon>mdi-github-circle</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>ZhangZisu</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://twitter.com/zisu_zhang" target="_blank">
              <v-list-item-avatar>
                <v-icon>mdi-twitter</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>@zisu_zhang</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://t.me/zhangzisu" target="_blank">
              <v-list-item-avatar>
                <v-icon>mdi-telegram</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>@zhangzisu</v-list-item-title>
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
  </v-container>
</template>

<script>
import gravatar from 'gravatar'

const email = 'admin@zhangzisu.cn'

export default {
  name: 'About',
  components: {
  },
  data: () => ({
    email,
    avatar: gravatar.url(email, { s: 128 })
  })
}
</script>
