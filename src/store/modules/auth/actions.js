import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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
export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload
});

export const logOut = () => {
  localStorage.removeItem('@token');
  return {
    type: LOGOUT
  }
};