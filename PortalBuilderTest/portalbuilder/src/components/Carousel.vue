<template lang="pug">
	extends ModalContentsBase.pug

	block modalContentsHere
		div
		input(
			type='checkbox'
			name='agreement'
			checked
		)
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import ModalContentsBase from './ModalContentsBase.vue';

	@Component({
	}) //['title', 'description', 'buttonText1', 'buttonText2', 'tabTitle1', 'tabTitle2', 'tabTitle3']
	export default class Carousel extends ModalContentsBase implements ModalText{ 
		title = "Image Carousel";
		description = "A short text about what this all means";
		buttonText1 = "Close";
		buttonText2 = "Button";
		hasTabs = false;

		
	}

</script>

<style scoped>
</style>