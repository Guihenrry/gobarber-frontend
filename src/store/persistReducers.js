import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      // Key serve para indetificar as aplicações que estaço no storage
      key: 'gobarber',
      storage,
      // Nome dos reducers que eu quero salvar
      whitelist: ['user', 'auth'],
    },
    reducers
  );

  return persistedReducer;
};
