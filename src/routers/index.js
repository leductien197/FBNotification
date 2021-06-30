import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useSelector, useDispatch} from 'react-redux';
// import {navigationRef} from '../navigation/NavigationService';
import Main from './Main';
// import Splash from '../screens/auth/Splash';

import * as ScreenTypes from '../navigation/ScreenTypes';

const Stack = createStackNavigator();

function App() {
  //   const dispatch = useDispatch();

  //   const auth = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ModalStack" component={ModalStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ModalStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainStackScreen"
      headerMode="none"
      mode="modal">
      <Stack.Screen name="MainStackScreen" component={MainStackScreen} />
    </Stack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={ScreenTypes.Main}>
      <Stack.Screen name={ScreenTypes.Main} component={Main} />
    </Stack.Navigator>
  );
}

export default App;
