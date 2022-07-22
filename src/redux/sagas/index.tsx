import { all } from 'redux-saga/effects';
import { watchSignatureData } from './signature';

export function* rootSaga() {
  yield all([
    watchSignatureData(),
  ]);
}
