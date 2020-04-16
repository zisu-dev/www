<template>
  <v-img :src="realSrc"/>
</template>

<script>
export default {
  name: 'RefreshImg',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data: () => ({
    realSrc: ''
  }),
  created () {
    this.realSrc = this.src
  },
  mounted () {
    const iid = setInterval(() => {
      this.realSrc = this.src + '&t=' + Date.now()
    }, 10000)
    this.$once('hook:beforeDestroy', function () {
      clearInterval(iid)
    })
  }
}
</script>
