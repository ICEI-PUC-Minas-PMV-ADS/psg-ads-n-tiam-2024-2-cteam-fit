import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Treinos from './pages/Treinos';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen 
        name="treinos" 
        component={Treinos} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default Main;
