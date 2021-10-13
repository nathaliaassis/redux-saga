import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import starWars from './star_wars_characters/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    starWars
  ]);
}