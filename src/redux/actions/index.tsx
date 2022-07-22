import * as types from './types';

const action = (type: string, payload: any, onComplete?: () => {}) => ({
  type,
  payload,
  onComplete
});

export const setSingature = (payload: string, onComplete?: () => {}) => action(types.SET_SIGNATURE, payload, onComplete);