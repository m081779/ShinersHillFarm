<template>
	<div>
		<v-row justify="center" align="center" class="mt-10">
			<v-col align-content="center">
				<p class="text-center larger-header">Welcome to Shiner's Hill Farm!</p>
				<h1 class="text-center">Site under construction, check back often!</h1>
			</v-col>
		</v-row>
		<v-row justify="center" align="center">
			<v-col align-content="center">
				<div class="text-center">
					<v-img lazy-src='/logo_transparent.png' src='/logo_transparent.png' alt='' max-height="600" contain/>
				</div>
			</v-col>
		</v-row>
		<v-footer  class="footer changeColor">
			<v-row justify="center" class=" pb-6 pt-2">
				<v-col>
				<h3 class="text-center">Contact us at <a href="mailto:farmer-liz@shinershillfarm.com" >Farmer-Liz@ShinersHillFarm.com</a></h3>
				</v-col>
			</v-row>
		</v-footer>
	</div>
</template>

<style lang="scss" scoped>
.changeColor {
	background: #e6d4bb !important;
	color: #5c3551 !important;
}
</style>
<style lang="scss">

</style>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator';
@Component({
	components: {
	}
})
export default class WebPage extends Vue {

}
</script>