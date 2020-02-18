<template lang="pug">
	extends ModalContentsBase.pug

	block modalContentsHere
		div This will be the description editor
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import ModalContentsBase from './ModalContentsBase.vue';

	@Component({
	})
	export default class Description extends ModalContentsBase implements ModalText {
		title = "Description Editor";
		description = "A short text about what this all means";
		buttonText1 = "Close";
		buttonText2 = "Save";
		hasTabs = false;
	}
</script>

<style scoped>
</style>