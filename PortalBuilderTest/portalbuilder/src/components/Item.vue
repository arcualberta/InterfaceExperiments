<template>
    <div class="item">
        I am item #{{idNum}}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DragItem extends Vue {
        @Prop() private idNum!: string;
        //load this stuff from the DB, passed in from parent
        name: string = "My item name";
        id: number = 0;

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
