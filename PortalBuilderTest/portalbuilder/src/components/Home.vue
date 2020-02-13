<template>
    <div>
        <div class="button-header">
            <button v-on:click="openPreview">
                Preview
            </button>
        </div>

        <div class="overall-container">
            <div class="home">
                <input @input="updateTitle" placeholder="Title"></input>
                <input @input="updateSubTitle" placeholder="Sub Title"></input>
                <p>Homescreen, need to add components for the bits here!</p>
                <draggable class="draggable-item-container" :list="itemsPlaced" group="sharedItems">
                    <div class="draggable-item" v-for="item in itemsPlaced" :key='item.name'>
                        <DragItem :idNum=item.id />
                    </div>
                </draggable>
            </div>
            <div class="draggable-item-container">
                <h2 class="draggable-header">Layout Options</h2>
                <draggable :list="layoutItems" :group="{ name: 'sharedItems', pull: 'clone', put: false }">
                    <div class="draggable-item" v-for="item in layoutItems" :key='item.name'>
                        <DragItem :idNum=item.id />
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

        //TODO change to a swtich statement for title and subtitle use later
        updateTitle(event:any) {
            this.$store.commit('updateTitle', event.target.value);
        }

        updateSubTitle(event: any) {
            this.$store.commit('updateSubTitle', event.target.value);
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .overall-container {
        display: flex;
        flex-direction: row;

        .home {
            display: flex;
            flex-direction: column;
            width: 100%;
            flex: 2;
        }
        
        .draggable-item-container {
            display: flex;
            flex-direction: column;
            padding:10px;
            justify-content: center;
            border: solid black 1px;
            wdith: 100%;
            flex: 1;

            .draggable-item{
                border: solid black 1px;
                padding:10px;
                cursor:grab;
            }
        }
    }
</style>
