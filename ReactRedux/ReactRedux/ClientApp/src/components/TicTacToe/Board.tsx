import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../store';
import * as TicTacToeStore from '../../store/TicTacToe';
import './TicTacToe.css';

// At runtime, Redux will merge together...
type TicTacToeProps =
    TicTacToeStore.TicTacToeState // ... state we've requested from the Redux store
    & typeof TicTacToeStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{}>; // ... plus incoming routing parameters


class TicTacToeBoard extends React.PureComponent<TicTacToeProps> {

    public render() {

        const status = this.props.winner && this.props.winner.length > 0 ?
            'Winner: ' + this.props.winner :
            'Next Player: ' + (this.props.xIsNext ? 'X' : 'O');


        return (
            <React.Fragment>
                <h1>Tic Tac Toe</h1>
                <p>Number of squares: {this.props.squares.length}</p>
                <div>
                    <div className="status">{status} <span className="error">{this.props.error}</span></div>
                </div>
                {this.renderSquares()}
           </React.Fragment>
        );
    }

    private renderSquares() {

        let rows = [];
        let n = Math.floor(Math.sqrt(this.props.squares.length));
        let cssClass = this.props.winner ? "square won" : "square";
        for (let r = 0; r < n; ++r) {
            let cols = [];
            for (let c = 0; c < n; ++c) {
                let idx = r * n + c;
                cols.push(<button
                    id={idx.toString()}
                    onClick={() => { this.props.click(idx); }}
                    className={cssClass}
                >
                    {this.props.squares[idx]}
                </button>);
            }
            rows.push(<div className="board-row">{cols}</div>);
        }

        return (
            <div>
                {rows}
            </div>
            );
    }
};

export default connect(
    (state: ApplicationState) => state.ticTacToe, // Selects which state properties are merged into the component's props
    TicTacToeStore.actionCreators // Selects which action creators are merged into the component's props
)(TicTacToeBoard);




