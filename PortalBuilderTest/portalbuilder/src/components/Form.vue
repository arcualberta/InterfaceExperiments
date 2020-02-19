<template lang="pug">
	extends ModalContentsBase.pug

	block modalContentsHere
		div Im in progress
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import ModalContentsBase from './ModalContentsBase.vue';

	@Component({
	})
	export default class Carousel extends ModalContentsBase implements ModalText, TabText {
		title = "Form Editor";
		description = "A short text about what this all means";
		buttonText1 = "Close";
		buttonText2 = "New Form...";
		hasTabs = true;
		tabTitle1 = "Description";
		tabTitle2 = "Settings";
		tabTitle3 = "Email";

	}

</script>

<style scoped>
</style>