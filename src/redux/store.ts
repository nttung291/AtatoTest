import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root-v0.0.2',
  storage: AsyncStorage,
  whitelist: [],
};
const middleware = [sagaMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);
if (__DEV__) {
  middleware.push(logger as any);
}
const store: Store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export {
  store,
  persistor,
};
