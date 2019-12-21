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
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            error: null
        };
        this.size = 5;
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i]) {
            this.setState({
                error: 'Block is already taken. ' + (this.state.xIsNext ? 'X' : 'O') + ' lost a turn.',
                xIsNext: !this.state.xIsNext
            })
        }
        else {
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                error: null,
                xIsNext: !this.state.xIsNext
            });
        }
    }

    render() {
        const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
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
}
