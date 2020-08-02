import React from 'react';
import { StatusBar } from 'react-native';

import Router from '@/config/routes';

import colors from '@/constants/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
      <Router />
    </>
  );
};

export default App;
