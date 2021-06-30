import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import ItemProduct from '../../components/CpnProduct/ItemProduct';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 360;
const Product = () => {
  const [data, setData] = useState([
    {
      image: require('../../assets/house.png'),
      title: 'Study House',
      position: 'Số 2 Kim Giang',
      timeOpen: '08:00',
      timeClose: '18:00',
      id: 1,
    },
  ]);
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.txtMain}>All Products</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item?.id.toString() || Math.random().toString()}
          onEndReachedThreshold={0.5}
          // onEndReached={() => { news.checkNext && setPage(page + 1) }}
          // ListFooterComponent={_renderFooter}
          renderItem={({item, index}) => {
            return (
              <ItemProduct
                item={item}
                index={index}
                // navigation={navigation}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  txtMain: {
    fontWeight: '500',
    fontSize: 20 * scale,
    marginTop: 20 * scale,
    color: 'black',
  },
});
