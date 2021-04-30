import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { loginFailed, loginSuccess } from './actions';
import { LOGIN_REQUEST } from '../../constants'

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/json/jwt-auth/v1/token', payload);

    const { token } = response.data;

    localStorage.setItem('@token', token);

    if (response.data) {
      yield put(loginSuccess(token));
    }
  } catch (error) {
    yield put(loginFailed(error.response));
  }
}

export default all([
  takeLatest(LOGIN_REQUEST, signIn)
]);