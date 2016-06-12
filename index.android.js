/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';

class CheckInPlay extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight style={styles.gif} onPress={MainButtonPress}>
            <Image
              style={styles.gif}
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            />
          </TouchableHighlight>
        </View>
    );
  }
}

var MainButtonPress = function () {
  // MainFunction Body
  //ToastAndroid.show('打卡成功', ToastAndroid.SHORT);
  navigator.geolocation.getCurrentPosition(
      (initialPosition) => alert(JSON.stringify(initialPosition)),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  //var position = JSON.stringify(this.state.initialPosition);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  gif: {
    width:150,
    height:150
  },
});

AppRegistry.registerComponent('CheckInPlay', () => CheckInPlay);
