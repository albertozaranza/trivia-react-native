import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/pages/Home/Home';
import Questions from '@/pages/Questions';

import { HomeProvider } from '@/contexts/home';

const Stack = createStackNavigator();

const SignUpContextProvider = () => (
  <HomeProvider>
    <Home />
  </HomeProvider>
);

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={SignUpContextProvider} />
        <Stack.Screen name='Questions' component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
