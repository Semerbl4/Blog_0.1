import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import errReducer from './errReducer';

export default combineReducers({
  mainReducer,
  errReducer,
});
