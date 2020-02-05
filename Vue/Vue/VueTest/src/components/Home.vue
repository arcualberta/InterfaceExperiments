<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <div v-if="endStateReached">{{endStateMsg}}</div>
        <div v-else>Next Player: {{players[turn]}}</div>
        <div class="my-row" v-for="(row, rowIndex) in gridData.rows">
            <div class="my-col" v-bind:class="{'game-finished': endStateReached }" v-for="(col, colIndex) in gridData.cols" v-on:click="placeToken(rowIndex, colIndex)">{{squareState[rowIndex*gridData.cols+colIndex]}}</div>
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
        endStateMsg: string = '';
        endStateReached: boolean = false;

              
        //places the player's token in the grid
        placeToken(row: number, col: number) {
            let squarePos = (row * this.gridData.cols) + col; 

            if (this.squareState[squarePos] == '') {
                this.squareState[squarePos] = this.players[this.turn];

                let potentialEnd = this.checkForWinner();
                let handledEnd = this.handleEndstate(potentialEnd);
                //means we have an ending
                if (handledEnd.length > 0) {
                    this.endStateMsg = handledEnd;
                    this.endStateReached = true;
                    return;
                }

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
            this.endStateReached = false;
        }


        //checks if there has been a winner from the player's turn
        checkForWinner():any {
            //check rows for a win
            //take sectons of the array and check if each the same as each other
            for (let rowNum = 0; rowNum < this.gridData.rows; rowNum++) {
                let tmpRow = this.squareState.slice(rowNum * this.gridData.cols, (rowNum * this.gridData.cols) + this.gridData.cols);
                if (tmpRow.every((element) =>
                    element === tmpRow[0] && tmpRow[0] != ''
                )){
                    console.log("row found!");
                    return tmpRow[0];
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
                        return tmpArray[0];
                    }
            }

            //check diagonals for a win

            //left-to-right diagonal
            let tmpArr: Array<string> = [];
            for (let index = 0; index < this.squareState.length; index += 4) {
                tmpArr.push(this.squareState[index]);
            }

            if (tmpArr.every((element) =>
                        element === tmpArr[0] && tmpArr[0] != ''
                    )){
                console.log("left diagonal found!");
                return tmpArr[0];
                    }

            //right-to-left diagonal
            tmpArr = [];
            for (let index = 2; index < this.squareState.length-1; index += 2) {
                tmpArr.push(this.squareState[index]);
            }
            console.log(tmpArr);
            if (tmpArr.every((element) =>
                        element === tmpArr[0] && tmpArr[0] != ''
                    )){
                console.log("right diagonal found!");
                return tmpArr[0];
                    }

            //if it's a draw
            if (tmpArr.every((element) =>
                   element === this.players[0] || element === this.players[1]
               )){
                console.log("Draw reached");
                return null;
            }

            return ""

        }

        //handles if the turn resulted in an endgame state
        //null = draw
        //"" = not an ending state
        //X or O = winner
        handleEndstate(pEnd: any):string {
            switch (pEnd) {
                case null:
                    return "Game Finished - Draw"
                case "":
                    return "";
                default:
                    return "Winner is " + pEnd + "!";
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

    .game-finished{
        background-color: lightgrey;
    }

</style>
