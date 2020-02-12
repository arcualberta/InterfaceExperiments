<template>
    <div class="item">
        I am an item
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        //load this stuff from the DB, passed in from parent
        name: string = "My item name";
        id: number = "0";

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
