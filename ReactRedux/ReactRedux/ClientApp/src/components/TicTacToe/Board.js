"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var TicTacToeStore = require("../../store/TicTacToe");
require("./TicTacToe.css");
var TicTacToeBoard = /** @class */ (function (_super) {
    __extends(TicTacToeBoard, _super);
    function TicTacToeBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TicTacToeBoard.prototype.render = function () {
        var status = this.props.winner && this.props.winner.length > 0 ?
            'Winner: ' + this.props.winner :
            'Next Player: ' + (this.props.xIsNext ? 'X' : 'O');
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Tic Tac Toe"),
            React.createElement("p", null,
                "Number of squares: ",
                this.props.squares.length),
            React.createElement("div", null,
                React.createElement("div", { className: "status" },
                    status,
                    " ",
                    React.createElement("span", { className: "error" }, this.props.error))),
            this.renderSquares()));
    };
    TicTacToeBoard.prototype.renderSquares = function () {
        var _this = this;
        var rows = [];
        var n = Math.floor(Math.sqrt(this.props.squares.length));
        var cssClass = this.props.winner ? "square won" : "square";
        for (var r = 0; r < n; ++r) {
            var cols = [];
            var _loop_1 = function (c) {
                var idx = r * n + c;
                cols.push(React.createElement("button", { id: idx.toString(), onClick: function () { _this.props.click(idx); }, className: cssClass }, this_1.props.squares[idx]));
            };
            var this_1 = this;
            for (var c = 0; c < n; ++c) {
                _loop_1(c);
            }
            rows.push(React.createElement("div", { className: "board-row" }, cols));
        }
        return (React.createElement("div", null, rows));
    };
    return TicTacToeBoard;
}(React.PureComponent));
;
exports.default = react_redux_1.connect(function (state) { return state.ticTacToe; }, // Selects which state properties are merged into the component's props
TicTacToeStore.actionCreators // Selects which action creators are merged into the component's props
)(TicTacToeBoard);
//# sourceMappingURL=Board.js.map