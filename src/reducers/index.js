import {combineReducers} from 'redux';
import product from './ProductReducer';
import user from './UserReducer';

const appReducers = combineReducers({
  product,
  user,
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = null;
  }
  return appReducers(state, action);
};
export default appReducers;
