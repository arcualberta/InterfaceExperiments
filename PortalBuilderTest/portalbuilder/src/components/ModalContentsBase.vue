<template lang="pug">
	include ModalContentsBase.pug
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component({
	})
	export default class ModalContentsBase extends Vue {
		//interface?
		title: string = '';
		description: string = '';
		buttonText1: string = 'Close';
		buttonText2: string = '';
		tabTitle1: string = '';
		tabTitle2: string = '';
		tabTitle3: string = '';



	}
</script>

<style scoped>
</style>