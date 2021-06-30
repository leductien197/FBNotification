import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 360;
const ItemProduct = props => {
  console.log('props:', props);
  return (
    <TouchableOpacity style={styles.product}>
      <View style={styles.content}>
        <Image
          style={styles.imgDes}
          source={require('../../assets/house.png')}
        />
      </View>
      <Text style={styles.des}>Study House</Text>
      <Text style={styles.time}>Số 2 Kim Giang</Text>
      <Text style={styles.time}>08:00 - 17:00</Text>
      <Text style={styles.time}>08:00 - 17:00</Text>
      <Text style={styles.time}>08:00 - 17:00</Text>
    </TouchableOpacity>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  product: {
    width: 328 * scale,
    height: 320 * scale,
    backgroundColor: 'gray',
  },
  content: {
    width: 328 * scale,
    height: 184 * scale,
  },
  imgDes: {
    flex: 1,
    resizeMode: 'cover',
  },
  des: {
    fontSize: 20 * scale,
    fontWeight: '600',
    color: 'black',
    lineHeight: 25 * scale,
  },
  time: {
    fontSize: 14 * scale,
    fontWeight: '400',
    color: 'black',
    lineHeight: 20 * scale,
  },
});
