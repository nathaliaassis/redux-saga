import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../../constants';

export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload
  }
};

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});
export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload
});

export const logOut = () => {
  localStorage.removeItem('@token');
  return {
    type: LOGOUT
  }
};