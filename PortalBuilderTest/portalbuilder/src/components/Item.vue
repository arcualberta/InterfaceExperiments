<template>
    <div class="item">
        <div class="label">
            I am item #{{idNum}}
        </div>
        <div v-if="deleteable">
            <button v-on:click="deleteItem">X</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DragItem extends Vue {
        @Prop() private idNum!: string;
        @Prop() private deleteable!: boolean;
        //load this stuff from the DB, passed in from parent
        name: string = "My item name";
        id: number = 0;  


        deleteItem(){
            this.$emit('delete-item', this.idNum); //idNum might not be right thing
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
