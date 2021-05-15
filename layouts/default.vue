<template>
  <v-app :dark="isAdmin" id="app">
    <v-container>
      <nuxt />
    </v-container>
    <v-footer absolute class="footer">
      <v-row justify="center" class="pa-10">
        <v-col>
          <h3 class="text-center">Contact us at <a href="mailto:farmer-liz@shinershillfarm.com" >Farmer-Liz@ShinersHillFarm.com</a></h3>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
#app, .footer {
  background: #e6d4bb;
  color: #5c3551;
}

</style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DefaultLayout extends Vue {
  public isAdmin = false;
}
</script>
