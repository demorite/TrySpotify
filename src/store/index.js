import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducers from './reducers'
import middlewares from './middlewares'

const reducer = combineReducers(reducers)

const enhancer =  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(...middlewares)
);

const store = createStore(reducer, enhancer);

export default store;