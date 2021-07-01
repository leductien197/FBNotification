import * as Types from '../constants/ActionType';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Types:
      return {...state};

    default:
      return state;
  }
};

export default user;
