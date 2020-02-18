<template lang="pug">
	extends ModalContentsBase.pug

	block modalContentsHere
		vue-dropzone(ref="myVueDropzone" id="dropzone" :options="dropzoneOptions")
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import ModalContentsBase from './ModalContentsBase.vue';
	import vue2Dropzone, { DropZoneOptions } from 'vue2-dropzone';
	import 'vue2-dropzone/dist/vue2Dropzone.min.css';

	@Component({
		components: {
			vueDropzone: vue2Dropzone
		}
	}) //['title', 'description', 'buttonText1', 'buttonText2', 'tabTitle1', 'tabTitle2', 'tabTitle3']
	export default class Carousel extends ModalContentsBase implements ModalText{ 
		title = "Image Carousel";
		description = "A short text about what this all means";
		buttonText1 = "Close";
		buttonText2 = "Button";
		hasTabs = false;

		dropzoneOptions: DropZoneOptions = {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }

		
	}

</script>

<style scoped>
</style>