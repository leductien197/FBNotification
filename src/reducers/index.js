import {combineReducers} from 'redux';

const appReducers = combineReducers({});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = null;
  }
  return appReducers(state, action);
};
export default appReducers;
