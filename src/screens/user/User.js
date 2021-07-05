import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 360;
const User = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txtUser}>Tab User</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtUser: {
    color: 'green',
    fontSize: 20,
  },
});
