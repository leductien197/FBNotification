import * as Types from '../constants/ActionType';

const initialState = {};

const product = (state = initialState, action) => {
  switch (action.type) {
    case Types:
      return {...state};

    default:
      return state;
  }
};

export default product;
