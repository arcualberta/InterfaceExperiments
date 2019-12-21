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
            xIsNext: true
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
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

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
                <div className="status">{status}</div>
                {rows}
            </div>
        );
    }
}
