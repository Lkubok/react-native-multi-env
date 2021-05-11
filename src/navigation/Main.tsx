import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {HomeScreen, SettingsScreen} from '../screens';

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // animationEnabled: true,
        headerStyle: {
          // backgroundColor: 'red',
          // justifyContent: 'center',
          // alignItems: 'center',
          // borderWidth: 5,
        },
        headerTitleContainerStyle: {
          // backgroundColor: 'aqua',
          // justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
