import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import store from '~/store';
import history from '~/services/history';
import Routes from '~/routes';
import GlobalStyles from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
