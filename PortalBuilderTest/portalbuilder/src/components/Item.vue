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
        @Prop() private idNum!: number;
        @Prop() private indexNum!: number;
        @Prop() private deleteable!: boolean;
        //load this stuff from the DB, passed in from parent


        deleteItem(){
            this.$emit('delete-item', this.indexNum);
		}





    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .item{
       /* &:hover{
                   border: solid green 1px;
               }*/
    }

</style>
