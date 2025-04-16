const initialState = [];


function favoriteReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD':
        return [...state, action.payload];
        case 'REMOVE':
        return state.filter((item) => item.id !== action.payload.id);
        default:
        return state;
    }
}

function createStore(reducer) {
    let state = reducer(undefined, {});
    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action);
        }
    };
}

const store = createStore(favoriteReducer);

export default store;