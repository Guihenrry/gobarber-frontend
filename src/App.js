import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';
import history from '~/services/history';
import Routes from '~/routes';
import GlobalStyles from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ToastContainer autoClose={3000} />
          <GlobalStyles />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
