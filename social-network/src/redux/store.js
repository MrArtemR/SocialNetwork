import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileRedicer from './profileReducer';

const reducers = combineReducers({
    profilePage : profileRedicer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;