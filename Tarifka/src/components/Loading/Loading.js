import React from 'react';
import LottieView from 'lottie-react-native';

export default () => (
  <LottieView
    source={require('../../assets/loading.json')}
    autoPlay
    loop
    speed={10}
  />
);
