/*
 * Credits: https://reactjs.org/tutorial/tutorial.html
*/

import React, { Component } from 'react';
import './TicTacToe.css';

class Square extends Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export class TicTacToeBoard extends Component {
    constructor(props) {
        super(props);
        this.size = 5;
        this.state = {
            squares: Array(this.size * this.size).fill(null),
            xIsNext: true,
            error: null,
            winner: null
        };
        
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i) {
        if (this.state.winner == null) {
            const squares = this.state.squares.slice();
            if (squares[i]) {
                this.setState({
                    error: 'Block is already taken. ' + (this.state.xIsNext ? 'X' : 'O') + ' lost a turn.',
                    xIsNext: !this.state.xIsNext
                })
            }
            else {
                squares[i] = this.state.xIsNext ? 'X' : 'O';
                const winner = this.calcWinner(squares, this.size);
                this.setState({
                    squares: squares,
                    error: null,
                    xIsNext: !this.state.xIsNext,
                    winner: winner
                });
            }
        }
    }

    render() {
        let status = null;
        if (this.state.winner) {
            status = 'Winner: ' + this.state.winner;
        }
        else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const error = this.state.error;

        let rows = [];
        for (let r = 0; r < this.size; ++r) {
            let cols = [];
            for (let c = 0; c < this.size; ++c) {
                cols.push(this.renderSquare(r * this.size + c));
            }
            rows.push(<div className="board-row">{cols}</div>);
        }


        return (
            <div>
                <div className="status">{status} <span className="error">{error}</span></div>
                {rows}
            </div>
        );
    }

    calcWinner(squares, size) {

        // Winning case 1: having a row filled with the same value
        for (let r = 0; (r < size) ; ++r) {
            let match = squares[r * size] != null;
            for (let c = 0; (c < size - 1) && match; ++c) {
                let idx = r * size + c;
                match = (squares[idx]) == (squares[idx + 1]);
            }

            if (match)
                return squares[r * this.size]
        }

        // Winning case 2: having a column filled with the same value
        for (let c = 0; (c < size); ++c) {
            let match = squares[c] != null;
            for (let r = 0; (r < size - 1) && match; ++r) {
                let idx = r * size + c;
                match = (squares[idx] != null) && (squares[idx]) == (squares[idx + size]);
            }

            if (match)
                return squares[c]
        }

        // Winning case 3: having the first diagonal filled with the same value
        let match = squares[0] != null;
        for (let i = 0; (i < size - 1) && match; ++i) {
            let idx1 = i * size + i;
            let idx2 = (i+1) * size + (i+1);

            match = squares[idx1] == squares[idx2];
        }
        if (match)
            return squares[0];

        // Winning case 3: having the second diagonal filled with the same value
        match = squares[size - 1] != null;
        for (let i = 0; (i < size - 1) && match; ++i) {
            let idx1 = i * size + size - 1 - i;
            let idx2 = (i + 1) * size + (size - 2 - i);

            match = squares[idx1] == squares[idx2];
        }
        if (match)
            return squares[size - 1];


        // None of the winning criteria is met
        return null;
    }
}
