<template>
    <div>
        <div class="button-header">
            <button v-on:click="openPreview">
                Preview
            </button>
        </div>

        <div class="overall-container">
            <div class="home">
                <input v-model="titleValue" placeholder="Title" value="titleValue"></input>
                <input v-model="subTitleValue" placeholder="Sub Title" value="subTitleValue"></input>
                <p>Homescreen, need to add components for the bits here!</p>

                <!-- Elements that are editable -->
                <draggable class="draggable-item-container" :list="portalElements" group="sharedItems" handle=".handle">
                    <div class="draggable-item" v-on:click="showModal(item.type)" v-for="(item, index) in portalElements" :key='index'>
                        <i class="handle draggable">HANDLE</i>
                        <DragItem @delete-item="deleteItem($event)" :name="item.name" :idNum=item.id :indexNum="index" :deleteable=true />
                    </div>
                </draggable>
            </div>

            <!-- Elements that are NOT editable, ie, they're just the draggables -->
            <b-card class="draggable-item-container">
                <h2 class="draggable-header">Layout Options</h2>
                <draggable :list="layoutItems" :group="{ name: 'sharedItems', pull: 'clone', put: false }">
                    <b-card class="draggable-item draggable" v-for="item in layoutItems" :key='item.id'>
                        <DragItem :idNum=item.id :deleteable=false :name="item.name" />
                    </b-card>
                </draggable>
            </b-card>
        </div>
        <modals-container />
        <div class="test-container">
            <div v-for="item in testItems">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import draggable from 'vuedraggable'; 
	import Carousel from './Carousel.vue';
	import Description from './Description.vue';
	import Form from './Form.vue';

    @Component({
        components:{
            draggable,
        }
    })
    export default class Home extends Vue {
        itemsPlaced:Array<any> =  [];
    //TODO: move these to another place to fetch until DB is implemented - they are static tho so...
        layoutItems:Array<any> =  [
        { name: "Image Carousel", id: 5, type: "Carousel" },
        { name: "Description", id: 6, type: "Description" },
        { name: "Form", id: 7, type: "Form" }
		];

		testItems: Array<any> = [];

		created() {
			this.$store.dispatch("fetchUsers").then(() => {
				console.log("dispatch complete!");
				console.log("before: ", this.$store.getters.getDataNames);
                this.testItems = this.$store.getters.getDataNames
				setTimeout(() => {
					this.$store.dispatch("updateUserName",
						{
							newName: "Mr. Waffles",
							index: 1
						});
					console.log("after: ", this.$store.getters.getDataNames);
					this.testItems = this.$store.getters.getDataNames;
				}, 3000);
			});
		}


        openPreview() {
            this.$router.replace('preview');
		}

    /********** getters/setters for state **********/

        get titleValue():String {
            return this.$store.getters.getTitle;
        }

        set titleValue(newString) {
             this.$store.commit('updateTitle', newString);
        }

        
        get subTitleValue():String {
            return this.$store.getters.getSubTitle;
        }

        set subTitleValue(newString) {
             this.$store.commit('updateSubTitle', newString);
        }


        get portalElements():Array<any> {
            return this.$store.getters.getPortalItems;
        }

        set portalElements(newArray) {
            this.$store.dispatch("updatePortalItems", newArray);
        }

		deleteItem($event: any) {
			this.$store.dispatch('deletePortalItem', $event);
		}

	/********** end of setters/getters for state **********/



		showModal(modalName: string) {
			console.log("showing modal", modalName);
			switch (modalName) {
				case "Carousel":
					this.$modal.show(Carousel);
					break;
				case "Description":
					this.$modal.show(Description);
					break;
				case "Form":
					this.$modal.show(Form);
					break;
			}
		}

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.overall-container {
		display: flex;
		flex-direction: row;
		
        .home
	{
		display: flex;
		flex-direction: column;
		width: 100%;
		flex: 2;
	}

	.draggable-item-container {
		display: flex;
		flex-direction: column;
		padding: 10px;
		justify-content: center;
		border: solid black 1px;
		flex: 1;

		.draggable-item
	{
		border: solid black 1px;
		padding: 10px;
		
        .handle
	{
	}

	}

	.draggable {
		cursor: grab;
	}

	}
	}
</style>
