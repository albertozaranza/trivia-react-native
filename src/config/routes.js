import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/pages/Home/Home';
import Questions from '@/pages/Questions';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Questions' component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
