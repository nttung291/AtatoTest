import * as types from '../actions/types';
import { SignatureState } from '../types';

const INITIAL = {
  signature: '',
} as SignatureState;

export default function appReducer(state = INITIAL, action = { type: 'default', payload: null }) {
  switch (action.type) {
    case types.SET_SIGNATURE:
      return {
        ...state,
        signature: action.payload,
      };
    default:
      return state;
  }
}
