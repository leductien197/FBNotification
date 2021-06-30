import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ScreenTypes from '../navigation/ScreenTypes';
import Product from '../screens/product/Product';
import ProductDetail from '../screens/product/ProductDetail';

const Stack = createStackNavigator();
export default function TabUser() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={ScreenTypes.Product}>
      <Stack.Screen name={ScreenTypes.Product} component={Product} />
      <Stack.Screen
        name={ScreenTypes.ProductDetail}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}
