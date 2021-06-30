import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ScreenTypes from '../navigation/ScreenTypes';
import User from '../screens/user/User';

const Stack = createStackNavigator();
export default function TabUser() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={ScreenTypes.User}>
      <Stack.Screen name={ScreenTypes.User} component={User} />
    </Stack.Navigator>
  );
}
