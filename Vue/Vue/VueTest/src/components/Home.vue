<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <div class="my-row" v-for="row of gridData.rows">
            <div class="my-col" v-for="col of gridData.cols" v-on:click="placeToken"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        @Prop() private msg!: string;
        data() {
            return {
                gridData: {
                    rows: 3,
                    cols: 3
                }
            }
        }


        

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .my-row{
        display: flex;
        flex-direction: row;
    }

    .my-col{
        padding: 20px;
        border: solid black 1px;
    }
</style>
