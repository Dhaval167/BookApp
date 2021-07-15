import {combineReducers} from 'redux';
import booksReducer from './BookReducer';

const rootReducer = combineReducers({
  booksReducer,
});

export default rootReducer;
