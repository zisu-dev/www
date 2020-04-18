<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" md="8" lg="6" xl="4">
        <v-card color="#FFFFFFc0">
          <v-list color="transparent">
            <v-list-item href="https://app.netlify.com/sites/zhangzisu/deploys" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Index</v-list-item-title>
                <v-list-item-subtitle>zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img :src="'https://img.shields.io/netlify/49a9880e-8ee7-4506-8575-0dcd7b335fb6?logo=netlify&style=flat-square&t=' + t"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://github.com/zhangzisu-cn/www/actions?query=workflow%3A%22Deploy+to+Coding%22" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Index</v-list-item-title>
                <v-list-item-subtitle>mainland.zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img :src="'https://img.shields.io/github/workflow/status/zhangzisu-cn/www/Deploy to Coding?logo=github&style=flat-square&t=' + t"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://app.netlify.com/sites/zzsblog/deploys" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Blog</v-list-item-title>
                <v-list-item-subtitle>blog.zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img :src="'https://img.shields.io/netlify/fb7bef3d-d3d8-482e-93db-67e542c8d8b5?logo=netlify&style=flat-square&t=' + t"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://github.com/zhangzisu-cn/blog/actions?query=workflow%3ACoding" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Blog</v-list-item-title>
                <v-list-item-subtitle>blog.mainland.zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img :src="'https://img.shields.io/github/workflow/status/zhangzisu-cn/blog/Coding?logo=github&style=flat-square&t=' + t"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://zhangzisu.coding.net/p/zlog/ci/job" target="_blank">
              <v-list-item-content>
                <v-list-item-title>ZLog Frontend</v-list-item-title>
                <v-list-item-subtitle>zlog.zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img :src="'https://zhangzisu.coding.net/badges/zlog/job/168111/build.svg?t=' + t"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://hub.docker.com/repository/docker/zhangzisu/zlog" target="_blank">
              <v-list-item-content>
                <v-list-item-title>ZLog</v-list-item-title>
                <v-list-item-subtitle>dt.zhangzisu.cn/api/zlog</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img :src="'https://img.shields.io/docker/cloud/build/zhangzisu/zlog?logo=docker&style=flat-square&t=' + t"/>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Status',
  data: () => ({
    t: 0
  })
}
</script>
