<template lang="pug">
		include ModalContentsBase.pug
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component({
	})
	export default class ModalContentsBase extends Vue {

	}
</script>

<style lang="scss">


		.modal-container{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;
			//background-color:red;
		

			.title-row{
				display:flex;
				flex-direction: row;
				width: 80%;
			
				h3{
					flex:3;
				}

				.tab-container{
					flex:1;
					display:flex;
					flex-direction:row;
					align-items: flex-end;

					.tab-style{
						flex: 1;
						height: 100%;
					}
				}
			}

			.description-container{
				width:80%;
				height:100%;
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

	

</style>