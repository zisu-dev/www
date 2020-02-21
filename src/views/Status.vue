<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="vibrancy">
          <v-list>
            <v-list-item href="https://app.netlify.com/sites/zhangzisu/deploys" target="_blank">
              <v-list-item-content>
                <v-list-item-title>WWW</v-list-item-title>
                <v-list-item-subtitle>zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img src="https://api.netlify.com/api/v1/badges/49a9880e-8ee7-4506-8575-0dcd7b335fb6/deploy-status"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://zhangzisu.coding.net/p/www/ci/job" target="_blank">
              <v-list-item-content>
                <v-list-item-title>WWW</v-list-item-title>
                <v-list-item-subtitle>mainland.zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img src="https://zhangzisu.coding.net/badges/www/job/160822/build.svg"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://zhangzisu.coding.net/p/zlog/ci/job" target="_blank">
              <v-list-item-content>
                <v-list-item-title>ZLog Frontend</v-list-item-title>
                <v-list-item-subtitle>zlog.zhangzisu.cn</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img src="https://zhangzisu.coding.net/badges/zlog/job/168111/build.svg"/>
              </v-list-item-action>
            </v-list-item>
            <v-list-item href="https://hub.docker.com/repository/docker/zhangzisu/zlog" target="_blank">
              <v-list-item-content>
                <v-list-item-title>ZLog</v-list-item-title>
                <v-list-item-subtitle>dt.zhangzisu.cn/api/zlog</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img src="https://img.shields.io/docker/cloud/build/zhangzisu/zlog?logo=docker&style=flat-square"/>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
