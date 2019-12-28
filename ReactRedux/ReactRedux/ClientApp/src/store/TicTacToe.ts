import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface TicTacToeState {
    squares: string[],
    xIsNext: boolean,
    error: null,
    winner: string
}


// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface ClickAction { type: 'CLICK', index: number }


// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = ClickAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    click: (idx: number) => ({ type: 'CLICK', index: idx } as ClickAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<TicTacToeState> = (state: TicTacToeState | undefined, incomingAction: Action): TicTacToeState => {
    if (state === undefined) {
        // Creating a new TicTacToeState objetc
        return {
            squares: ["", "", "", "", "", "", "", "", ""],
            xIsNext: true,
            error: null,
            winner: ""
        };
    }

    const action = incomingAction as KnownAction;

    switch (action.type) {
        case 'CLICK':
            if (state.winner) {
                return state; //Already in a winning state. No need to continue playing.
            }
            // Cloning the given TicTacToeState
            let newState = {
                squares: state.squares,
                xIsNext: !state.xIsNext,
                error: state.error,
                winner: state.winner
            }
            newState.squares[action.index] = state.xIsNext ? "X" : "O";
            newState.winner = calcWinner(newState.squares, Math.floor(Math.sqrt(newState.squares.length)));

            return newState;
        default:
            return state;
    }
};


function calcWinner(squares: string[], size: number): string {

    // Winning case 1: having a row filled with the same value
    for (let r = 0; (r < size); ++r) {
        let match = squares[r * size] != null;
        for (let c = 0; (c < size - 1) && match; ++c) {
            let idx = r * size + c;
            match = (squares[idx]) == (squares[idx + 1]);
        }

        if (match)
            return squares[r * size]
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
        let idx2 = (i + 1) * size + (i + 1);

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
    return "";
};
