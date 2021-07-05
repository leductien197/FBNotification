import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import * as ScreenTypes from '../../navigation/ScreenTypes';
import {localNotificationService} from '../../services/LocalNotificationService';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 360;
const ProductDetail = props => {
  // console.log('props', props);
  const sendNoti = () => {
    localNotificationService.showNotification(
      1,
      'App notification',
      'Local notification',
      {},
      {},
    );
  };

  const cancelNoti = () => {
    localNotificationService.cancelAllLocalNotifications();
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text
          style={styles.txtDetail}
          onPress={() => props.navigation.goBack()}>
          Detail Products
        </Text>

        {/* <Text style={styles.txtSendNoti} onPress={() => sendNoti()}>
          Send local notification
        </Text>
        <Text style={styles.txtSendNoti} onPress={() => cancelNoti()}>
          Cancel local Notification
        </Text> */}

        <AwesomeButtonRick
          type="primary"
          width={226 * scale}
          height={70 * scale}
          textColor="white"
          // backgroundColor="#712AA2"
          raiseLevel={10 * scale}
          borderRadius={30 * scale}
          // backgroundDarker="#520089"
          style={{marginTop: 22 * scale}}
          textSize={20 * scale}
          onPress={() => sendNoti()}>
          Send Noti
        </AwesomeButtonRick>
        <AwesomeButtonRick
          type="secondary"
          width={226 * scale}
          height={70 * scale}
          textColor="black"
          // backgroundColor="#712AA2"
          raiseLevel={10 * scale}
          borderRadius={30 * scale}
          // backgroundDarker="#520089"
          style={{marginTop: 22 * scale}}
          textSize={20 * scale}
          onPress={() => cancelNoti()}>
          Cancel Noti
        </AwesomeButtonRick>
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
  txtSendNoti: {
    fontSize: 20 * scale,
    fontWeight: '700',
    color: 'blue',
    marginTop: 40 * scale,
    padding: 10 * scale,
  },
});
