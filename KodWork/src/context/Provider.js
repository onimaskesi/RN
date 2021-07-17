import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import initialState from './store';
import reducers from './reducer';

export default ({children}) => {
  const store = createStore(reducers, initialState);
  return <Provider store={store}>{children}</Provider>;
};
