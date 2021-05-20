<template>
  <v-app dark id="app" :class="{changeColor: !isAdmin}">
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>


<style lang="scss" scoped>
.changeColor {
	background: #e6d4bb !important;
	color: #5c3551 !important;
}
</style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DefaultLayout extends Vue {
  public keys = [] as string[];

  public get isAdmin() {
    return this.$store.state.session.isAdmin
  }

  beforeMount() {
    document.addEventListener('keyup', this.handleKeypress(this))
  }
  public handleKeypress(self: DefaultLayout) {
		return function(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				self.keys = [];
				return;
			}
			self.keys.push(e.key);
      if (self.keys.length > 'admin'.length) {
        self.keys.shift()
      }
			const code = self.keys.join('')
			if (code === 'admin') {
        self.$store.dispatch('session/toggleIsAdmin')
				self.keys = [];
			}
		}
	}
}
</script>
