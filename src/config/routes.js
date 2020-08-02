import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/pages/Home';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
