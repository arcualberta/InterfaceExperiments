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
                <draggable class="draggable-item-container" :list="portalElements" group="sharedItems">
                    <div class="draggable-item" v-for="(item, index) in portalElements" :key='index'>
                        <DragItem @delete-item="deleteItem()" :idNum=item.id :deleteable=true />
                    </div>
                </draggable>
            </div>

            <!-- Elements that are NOT editable, ie, they're just the draggables -->
            <div class="draggable-item-container">
                <h2 class="draggable-header">Layout Options</h2>
                <draggable :list="layoutItems" :group="{ name: 'sharedItems', pull: 'clone', put: false }">
                    <div class="draggable-item" v-for="item in layoutItems" :key='item.id'>
                        <DragItem :idNum=item.id :deleteable=false />
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import draggable from 'vuedraggable';

    @Component({
        components:{
            draggable,
        }
    })
    export default class Home extends Vue {
        itemsPlaced:Array<any> =  [];
    //TODO: move these to another place to fetch until DB is implemented - they are static tho so...
        layoutItems:Array<any> =  [
        { name: "Image Carousel", id: 5, type: "carousel" },
        { name: "Form", id: 6, type: "form" },
        { name: "Description", id: 7, type: "description" }
      ];


        openPreview() {
            this.$router.replace('preview');
        }

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

        deleteItem(){
        console.log("parent heard to delete");
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
        wdith: 100%;
        flex: 1;
        .draggable-item

    {
        border: solid black 1px;
        padding: 10px;
        cursor: grab;
    }

    }
    }
</style>
