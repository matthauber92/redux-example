import {Action, configureStore, Store} from '@reduxjs/toolkit';
import rootReducer, {RootState} from './rootReducer.tsx';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: Store<RootState, Action, unknown> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store)

export {store, persistor};
