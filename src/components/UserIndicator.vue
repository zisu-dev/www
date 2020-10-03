<template>
  <v-btn outlined loading v-if="!api"></v-btn>
  <v-btn outlined v-else-if="api.state.loggedIn" :loading="loading" href="https://hub.zhangzisu.cn" target="_blank">
    {{ nickname }}
  </v-btn>
  <v-btn outlined v-else @click="login" :loading="loading">
    <v-icon left>mdi-account-circle</v-icon>
    Login
  </v-btn>
</template>

<script>
import { api } from '@/api'

export default {
  name: 'UserIndicator',
  data: () => ({
    loading: false,
    api: null,
    nickname: ''
  }),
  async created () {
    this.loading = true
    this.api = await api
    window.api = this.api
    this.loading = false
    if (this.api.state.loggedIn) {
      this.load()
    }
  },
  methods: {
    async load () {
      this.loading = true
      const user = await this.api.user.getOneOrFail(this.api.userId)
      this.nickname = user.nickname
      this.loading = false
    },
    login () {
      this.loading = true
      const win = window.open('https://hub.zhangzisu.cn/#/login?embed=1', 'Login', 'height=640,width=480')
      const cb = ev => {
        if (ev.source === win && ev.data === 'done') {
          window.removeEventListener('message', cb)
          setTimeout(() => {
            this.load()
          }, 500)
        }
      }
      window.addEventListener('message', cb)
    }
  }
}
</script>
