import { combineReducers } from 'redux';
import flash from './flash';
import characters from './characters';
import cities from './cities';

const rootReducer = combineReducers({
  flash,
  characters,
  cities,
});

export default rootReducer;
