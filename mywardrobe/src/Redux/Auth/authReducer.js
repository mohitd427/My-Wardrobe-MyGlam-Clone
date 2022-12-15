import * as types from "./authActionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.REGISTER_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };
    }

    case types.REGISTER_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,

      };
    }
    default:
      return state;
  }
};

export { userReducer };
