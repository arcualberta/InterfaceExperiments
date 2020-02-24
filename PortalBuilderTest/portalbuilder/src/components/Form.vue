<template lang="pug">
	extends ModalContentsBase.pug

	block modalContentsHere
		div {{textToDisplayLabel}}
		b-dropdown(text="Dropdown Test")
			b-dropdown-item Test Hardcoded Item 1
			b-dropdown-item Test Hardcoded Item 2
			b-dropdown-item Test Hardcoded Item 3
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

		textToDisplayLabel: string = "Text to Display Link:";

	}

</script>

<style scoped>
</style>