import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import * as ScreenTypes from '../../navigation/ScreenTypes';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 360;
const ProductDetail = props => {
  // console.log('props', props);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text
          style={styles.txtDetail}
          onPress={props.navigation.navigate(ScreenTypes.Product)}>
          Detail Products
        </Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtDetail: {
    fontSize: 20 * scale,
    fontWeight: '700',
    color: 'blue',
  },
});
