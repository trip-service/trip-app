import { combineReducers } from 'redux';

import auth from './authReducer';
import setting from './settingReducer';
import task from './taskReducer';

export default combineReducers({
  auth,
  task,
  setting,
});
