"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    check: function (idx) { return ({ type: 'CHECK', index: idx }); },
    reset: function () { return ({ type: 'RESET' }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        // Creating a new TicTacToeState objetc
        return {
            squares: ["", "", "", "", "", "", "", "", ""],
            xIsNext: true,
            error: null,
            winner: ""
        };
    }
    var action = incomingAction;
    switch (action.type) {
        case 'CHECK':
            if (state.winner) {
                return state; //Already in a winning state. No need to continue playing.
            }
            // Cloning the given TicTacToeState
            var newState = {
                squares: state.squares,
                xIsNext: !state.xIsNext,
                error: state.error,
                winner: state.winner
            };
            newState.squares[action.index] = state.xIsNext ? "X" : "O";
            newState.winner = calcWinner(newState.squares, Math.floor(Math.sqrt(newState.squares.length)));
            return newState;
        case 'RESET':
            newState = {
                squares: state.squares.map(function (x) { return ""; }),
                xIsNext: true,
                error: null,
                winner: ""
            };
            return newState;
        default:
            return state;
    }
};
function calcWinner(squares, size) {
    // Winning case 1: having a row filled with the same value
    for (var r = 0; (r < size); ++r) {
        var match_1 = squares[r * size] != null;
        for (var c = 0; (c < size - 1) && match_1; ++c) {
            var idx = r * size + c;
            match_1 = (squares[idx]) == (squares[idx + 1]);
        }
        if (match_1)
            return squares[r * size];
    }
    // Winning case 2: having a column filled with the same value
    for (var c = 0; (c < size); ++c) {
        var match_2 = squares[c] != null;
        for (var r = 0; (r < size - 1) && match_2; ++r) {
            var idx = r * size + c;
            match_2 = (squares[idx] != null) && (squares[idx]) == (squares[idx + size]);
        }
        if (match_2)
            return squares[c];
    }
    // Winning case 3: having the first diagonal filled with the same value
    var match = squares[0] != null;
    for (var i = 0; (i < size - 1) && match; ++i) {
        var idx1 = i * size + i;
        var idx2 = (i + 1) * size + (i + 1);
        match = squares[idx1] == squares[idx2];
    }
    if (match)
        return squares[0];
    // Winning case 3: having the second diagonal filled with the same value
    match = squares[size - 1] != null;
    for (var i = 0; (i < size - 1) && match; ++i) {
        var idx1 = i * size + size - 1 - i;
        var idx2 = (i + 1) * size + (size - 2 - i);
        match = squares[idx1] == squares[idx2];
    }
    if (match)
        return squares[size - 1];
    // None of the winning criteria is met
    return "";
}
;
//# sourceMappingURL=TicTacToe.js.map