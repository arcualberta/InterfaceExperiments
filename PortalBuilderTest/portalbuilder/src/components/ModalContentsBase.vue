<template lang="pug">
	<div class="functional-container">
		include ModalContentsBase.pug
	</div>
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

<style scoped lang="scss">

	.functional-container{
		width:100%;
		height:100%;

		.modal-container{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;
		

			.title-row{
				display:flex;
				flex-direction: row;
				width: 100%;
			
				h3{
					flex:3;
				}

				.tab-container{
					flex:1;
					display:flex;
					flex-direction:row;

					.tab-style{
						flex: 1;
						height: 50%;
					}
				}
			}

			.description-container{
				width:80%;
				height:100%;
				padding: 30px;
				border: solid black 1px;
			}

			.button-container{
				display:flex;
				flex-direction: row;
				width: 50%;

				.button-style{
					width: 50%;
					margin: 10px;
				}
			}
		}
	}

	

</style>