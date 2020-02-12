<template>
    <div class="overall-container">
        <Home/>
        <div class="layout-item-container">
            <div v-for="item in [0, 1, 2, 3, 4]">
                <Item></Item>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Home from './components/Home.vue';
    import Item from './components/Item.vue';

    @Component({
        components: {
            Home,
            Item
        }
    })
    export default class App extends Vue { }
</script>

<style lang="scss">
    .overall-container{
        display:flex;
        flex-direction: row;
    
        .layout-item-container{
            display: flex;
            flex-direction: column;
        }
        
        }
    
</style>
