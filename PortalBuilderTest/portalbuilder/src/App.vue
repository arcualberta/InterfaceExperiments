<template>
        <router-view></router-view>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    
    import Preview from './components/Preview.vue';
    import Home from './components/Home.vue';
    import DragItem from './components/Item.vue';



    @Component({
    //this is local component use
        components: {
            DragItem,
            Home,
            Preview
        }
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    
</style>
