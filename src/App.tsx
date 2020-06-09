import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
