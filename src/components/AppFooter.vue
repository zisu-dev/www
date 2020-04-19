<template>
  <v-footer inset dark>
    <v-row justify="end" no-gutters>
      <v-col cols="12" sm="auto" class="text-right">
        <v-btn text disabled class="text-none" >
          &copy; {{ new Date().getFullYear() }} ZhangZisu
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn text href="https://buttercms.com" target="_blank" class="pa-0">
          <img src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo" height="36px">
        </v-btn>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn icon href="https://creativecommons.org/licenses/by-sa/" target="_blank" v-on="on">
              <v-icon>mdi-creative-commons</v-icon>
            </v-btn>
          </template>
          <span>BY-SA</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
