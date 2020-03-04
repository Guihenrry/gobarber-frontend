import createSagaMiddleare from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleare = createSagaMiddleare({ sagaMonitor });

const middleares = [sagaMiddleare];

const store = createStore(rootReducer, middleares);

sagaMiddleare.run(rootSaga);

export default store;
