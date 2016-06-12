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
} from 'react-native';

class CheckInPlay extends Component {
  render() {
    return (
      <View style={{}}>
        <View style={[styles.height160,styles.row]}>
          <View style={[styles.height160,styles.part_1_left]}>
            <Text style={[styles.font14,styles.marTop18,styles.green,styles.marLeft30]}>我们约吧</Text>
            <Text style={[styles.font10,styles.marTop14,styles.marLeft30]}>恋人家人好朋友</Text>
            <Image style={styles.yue} 
            source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
          </View>
          <View style={[styles.height160,styles.part_1_right]}>
            <View></View>
            <View>
              <View></View>
            </View>
          </View>
        </View>
        <View></View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
  },
  marTop18:{
    marginTop:18,
  },
  marTop14:{
      marginTop:14,
  },
  green:{
    color:'#55A44B',
    fontWeight: '900'
  },
  marLeft30:{
    marginLeft:30,
  },
  height160:{
    height:160,
  },
  height160:{
    height:160,
  },
  yue:{
    height:80,
  },
  font14:{
    fontSize:14,
  },
  font10:{
    fontSize:10,
  },
  part_1_left:{
    flex:1,
    borderWidth:1,
    borderColor:'red',
  },
  part_1_right:{
    flex:2,
    borderWidth:1,
    borderColor: 'red',
  },
});

AppRegistry.registerComponent('CheckInPlay', () => CheckInPlay);
