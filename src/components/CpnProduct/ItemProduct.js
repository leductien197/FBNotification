import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import * as ScreenTypes from '../../navigation/ScreenTypes';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 360;
const ItemProduct = props => {
  // console.log('props:', props);
  return (
    <TouchableOpacity
      style={styles.product}
      onPress={props.navigation.navigate(ScreenTypes.ProductDetail)}>
      <View style={styles.content}>
        <Image style={styles.imgDes} source={props?.item?.image} />
      </View>
      <Text style={styles.des}>{props?.item?.title}</Text>
      <Text style={styles.time}>{props?.item?.position}</Text>
      <Text style={styles.time}>Start: {props?.item?.timeOpen}</Text>
      <Text style={styles.time}>Close: {props?.item?.timeClose}</Text>
      <Text style={styles.time}>08:00 - 17:00</Text>
    </TouchableOpacity>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  product: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginTop: 25 * scale,
  },
  content: {
    width: 328 * scale,
    height: 184 * scale,
  },
  imgDes: {
    width: 328 * scale,
    height: 184 * scale,
    resizeMode: 'cover',
  },
  des: {
    fontSize: 20 * scale,
    fontWeight: '600',
    color: 'white',
    lineHeight: 25 * scale,
  },
  time: {
    fontSize: 14 * scale,
    fontWeight: '400',
    color: 'white',
    lineHeight: 20 * scale,
  },
});
