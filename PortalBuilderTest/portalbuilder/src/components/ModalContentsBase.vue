<template lang="pug">
	include ModalContentsBase.pug
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component({
	})
	export default class ModalContentsBase extends Vue {
		@Prop() title: string = '';
		@Prop() description: string = '';
		@Prop() buttonText1: string = 'Close';
		@Prop() buttonText2: string = '';
		@Prop() tabTitle1: string = '';
		@Prop() tabTitle2: string = '';
		@Prop() tabTitle3: string = '';



	}
</script>

<style scoped>
</style>