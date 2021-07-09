import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {View, Dimensions, Text, Linking} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DropdownAlert from 'react-native-dropdownalert';
import {fcmService} from './src/services/FCMService';
import {localNotificationService} from './src/services/LocalNotificationService';
import Route from './src/routers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducers from './src/reducers/index';
import * as ScreenTypes from './src/navigation/ScreenTypes';
import * as RootNavigation from './src/navigation/RootNavigation';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';
import * as Types from './src/constants/ActionType';
import AsyncStorage from '@react-native-community/async-storage';

function App() {
  const [initialRoute, setInitialRoute] = useState(ScreenTypes.ProductDetail);
  // const dispatch = useDispatch();
  const [isStart, setIsStart] = useState(false);
  const store = createStore(appReducers, applyMiddleware(thunk));
  // useEffect(() => {
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //         setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
  //       }
  //       // setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log('[App] onRegister: ', token);
    }

    function onNotification(notify) {
      console.log('[App] onNotification: ', notify);
      const options = {
        soundName: 'default',
        playSound: true, //,
        // largeIcon: 'ic_launcher', // add icon large for Android (Link: app/src/main/mipmap)
        // smallIcon: 'ic_launcher' // add icon small for Android (Link: app/src/main/mipmap)
      };
      if (notify !== undefined) {
        localNotificationService.showNotification(
          0,
          notify.title,
          notify.body,
          notify,
          options,
        );
      }
    }

    // const handleClick = () => {};

    async function onOpenNotification(notify) {
      if (notify !== undefined) {
        await console.log('[App] onOpenNotification: ', notify);
        // await AsyncStorage.setItem('Notify', JSON.stringify(notify));
        // await setIsStart(true);
        await RootNavigation.navigate(ScreenTypes.ProductDetail, notify);
        // alert('Open Notification: ' + notify.body);
      }
    }
    // dispatch({type: Types.GET_IS_START});

    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Route
        //  initialRoute={initialRoute}
        />
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
