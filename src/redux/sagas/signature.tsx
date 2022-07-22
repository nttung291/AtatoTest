import {
  takeLatest
} from 'redux-saga/effects';
import * as types from '../actions/types';

function* setSignatureWorker() {
  
}

export function* watchSignatureData() {
  yield takeLatest(types.SET_SIGNATURE, setSignatureWorker);
}