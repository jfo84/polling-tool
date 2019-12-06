import React from 'react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../redux/reducers';
import initialState from '../redux/reducers/initialState';

import Poll from './Poll';

import { AppContainer, AppTitle } from './styled';

const middlewares = [thunk];

if (process.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <AppTitle>Sir Vote-a-lot</AppTitle>
      <Poll />
    </AppContainer>
  </Provider>
);

export default App;
