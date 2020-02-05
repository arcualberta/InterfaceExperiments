<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <div>Next Player: {{players[turn]}}</div>
        <div class="my-row" v-for="(row, rowIndex) in gridData.rows">
            <div class="my-col" v-for="(col, colIndex) in gridData.cols" v-on:click="placeToken(rowIndex, colIndex)">{{squareState[rowIndex*gridData.cols+colIndex]}}</div>
        </div>
        <button v-on:click="resetGame">Reset</button>
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
        players: Array<string> = ['X', 'O'];
        squareState: Array<string> = ['', '', '', '', '', '', '', '', ''];
        turn: number = 0;

              
        //places the player's token in the grid
        placeToken(row: number, col: number) {
            let squarePos = (row * this.gridData.cols) + col; 

            if (this.squareState[squarePos] == '') {
                this.squareState[squarePos] = this.players[this.turn];

                this.checkForWinner();

                if (this.turn > 0) {
                    this.turn = 0;
                } else {
                    this.turn = 1;
                }
    
            }

        }

        //resets the game to the beginning state
        resetGame() {
            for (let squareIndex in this.squareState) {
                Vue.set(this.squareState, squareIndex, '');
            }
        }


        //checks if there has been a winner from the player's turn
        checkForWinner() {
            //check rows for a win
            //take sectons of the array and check if each the same as each other
            for (let rowNum = 0; rowNum < this.gridData.rows; rowNum++) {
                let tmpRow = this.squareState.slice(rowNum * this.gridData.cols, (rowNum * this.gridData.cols) + this.gridData.cols);
                if (tmpRow.every((element) =>
                    element === tmpRow[0] && tmpRow[0] != ''
                )){
                    console.log("row found!");
                }
            }

            //check cols for a win
            for (let cols = 0; cols < this.gridData.cols; cols++) {
                let tmpArray: Array<string> = [];
                for (let index = 0; index < this.gridData.cols; index++) {
                    tmpArray.push(this.squareState[(+index * this.gridData.rows) + cols ]);
                    }
                    if (tmpArray.every((element) =>
                        element === tmpArray[0] && tmpArray[0] != ''
                    )){
                        console.log("col found!");
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
