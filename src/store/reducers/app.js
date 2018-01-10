import {Map} from 'immutable'

const handlers = {
};

const initialState = Map({
});

export default (state = initialState, action) => {
    if(typeof handlers[action.type] === 'function')
        return handlers[action.type](state, action)
    return state;
}