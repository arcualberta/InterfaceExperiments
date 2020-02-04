<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <div>Next Player: {{players[turn]}}</div>
        <div class="my-row" v-for="(row, rowIndex) in gridData.rows">
            <div class="my-col" v-for="(col, colIndex) in gridData.cols" v-on:click="placeToken"></div>
        </div>
        <button>Reset</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        @Prop() private msg!: string;

        gridData:any = {
            rows: 3,
            cols: 3
        };
        players: Array<String> = ['X', 'O'];
        turn: number = 0;

              
        //places the player's token in the grid
        placeToken(element: any) {
            if (element.target.innerHTML == '') {
                element.target.innerHTML = this.players[this.turn];

                if (this.turn > 0) {
                    this.turn = 0;
                } else {
                    this.turn = 1;
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
        width: 30px;
        height: 30px;
        border: solid black 1px;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .square-filled{
        border: 1px solid #999;
        float: left;
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        height: 34px;
        margin-right: -1px;
        margin-top: -1px;
        padding: 0;
        text-align: center;
        width: 34px;
    }
</style>
