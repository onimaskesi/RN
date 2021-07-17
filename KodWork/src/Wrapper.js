import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import React from 'react';
import Router from './Router';
import Provider from './context/Provider';

export default () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};
