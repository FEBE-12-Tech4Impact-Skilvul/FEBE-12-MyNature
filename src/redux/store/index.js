import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducers from '../reducers/userReducer';

const allReducer = combineReducers({
  user: userReducers
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store