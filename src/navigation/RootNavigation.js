import * as React from 'react';
import {StackActions} from '@react-navigation/routers';

export const navigationRef = React.createRef();

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

export default {
  navigate,
  //   push,
  //   replace,
  goBack,
};
