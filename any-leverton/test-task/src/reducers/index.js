import {combineReducers} from 'redux';
import yourReducer from './yourReducer';

export default combineReducers({
  data: yourReducer
});