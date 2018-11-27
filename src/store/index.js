import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducers from './reducers'
import middlewares from './middlewares'

const reducer = combineReducers(reducers)

const enhancer =  compose(
    applyMiddleware(...middlewares)
);

const store = createStore(reducer, enhancer);

export default store;