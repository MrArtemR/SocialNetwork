import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileRedicer from './profileReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
    profilePage : profileRedicer,
    usersPage : usersReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;