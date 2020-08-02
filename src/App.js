import React from 'react';
import { StatusBar } from 'react-native';

import { QuestionsProvider } from '@/contexts/questions';

import Router from '@/config/routes';

import colors from '@/constants/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
      <QuestionsProvider>
        <Router />
      </QuestionsProvider>
    </>
  );
};

export default App;
