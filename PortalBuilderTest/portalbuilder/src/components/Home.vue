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
            </div>
            <div class="layout-item-container">
                <div v-for="item in [0, 1, 2, 3, 4]">
                    <DragItem :idNum=item />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    //import DragItem from './components/Item.vue';

    @Component
    export default class Home extends Vue {

        //try controlling the route programmically, use the 
        //router.push thing and put it inside a window.open call and see if that works

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

    .home{
        display:flex;
        flex-direction:column;
    }

        .overall-container{
        display:flex;
        flex-direction: row;
    
        .layout-item-container{
            display: flex;
            flex-direction: column;
        }
        
        }

</style>
