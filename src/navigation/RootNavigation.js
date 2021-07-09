import * as React from 'react';
import {StackActions} from '@react-navigation/routers';
import * as ScreenTypes from '../navigation/ScreenTypes';

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function push(routeName, params = {}) {
  navigationRef.current &&
    navigationRef.current?.dispatch(StackActions.push(routeName, params));
}

export function replace(routeName, params = {}) {
  navigationRef.current &&
    navigationRef.current?.dispatch(StackActions.replace(routeName, params));
}

export function goBack() {
  navigationRef.current?.goBack();
}
export function getRootState() {
  navigationRef.current.getRootState();
}
// export function navigate(name, params) {
//   if (isReadyRef.current && navigationRef.current) {
//     // Perform navigation if the app has mounted
//     navigationRef.current.navigate(name, params);
//   } else {
//     navigationRef.current.navigate(name, params);
//     // You can ignore this, or add these actions to a queue you can call later
//   }
// }

export default {
  navigate,
  push,
  replace,
  goBack,
};
