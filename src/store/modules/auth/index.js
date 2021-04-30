import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from '../../constants';

const INITIAL_STATE = {
  loading: false,
  token: null
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload
      };
    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        token: null
      };
    }
    case LOGOUT: {
      return {
        ...state,
        loading: false,
        token: null
      };
    }
    default:
      return state;
  }
}

export default authReducer;