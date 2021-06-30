import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 360;
const ProductDetail = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.txtDetail}>Detail Products</Text>
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
