import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen 
        name="" 
        component={} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="" 
        component={} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default Main;
