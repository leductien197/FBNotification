import * as Types from '../constants/ActionType';

const initialState = {
  notification: {},
  is_start: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_IS_START:
      return {...state, is_start: true};

    default:
      return state;
  }
};

export default product;
