import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SWAPI } from '../../../services/api';
import { getCharacterFailure, getCharacterSuccess } from './actions';
import { SW_CHARACTER_REQUEST } from '../../constants'

function* getCharacters() {
  try {
    const response = yield call(SWAPI.get, '/people');
    yield put(getCharacterSuccess(response.data));
  } catch (error) {
    yield put(getCharacterFailure(error.response));
  }
}

export default all([
  takeLatest(SW_CHARACTER_REQUEST, getCharacters)
]);