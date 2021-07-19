import React from 'react';
import {Alert, Text, TouchableHighlight, View} from 'react-native';
import styles from '../StyleSheet/StyleAlert';

/**
 * @author
 * @function TheAlert
 **/
const TheAlert = props => {
  const alertMessage = 'Test Alert';
  return (
    <View style={styles.constant}>
      <TouchableHighlight
        style={styles.wrapper}
        onPress={() => Alert.alert('Alert Title', alertMessage)}>
        <View style={styles.button}>
          <Text>Alert with message and default button</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.wrapper}
        onPress={() =>
          Alert.alert('Alert Title', alertMessage, [
            {text: 'OK', onPress: () => console.log('OK Pressed!')},
          ])
        }>
        <View style={styles.button}>
          <Text>Alert with one button</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.wrapper}
        onPress={() =>
          Alert.alert('Alert Title', alertMessage, [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: () => console.log('OK Pressed!')},
          ])
        }>
        <View style={styles.button}>
          <Text>Alert with two buttons</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.wrapper}
        onPress={() =>
          Alert.alert('Alert Title', null, [
            {text: 'Button1', onPress: () => console.log('Button1')},
            {text: 'Button2', onPress: () => console.log('Button2')},
            {text: 'Button3', onPress: () => console.log('Button3')},
          ])
        }>
        <View style={styles.button}>
          <Text>Alert with three buttons</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.wrapper}
        onPress={() =>
          Alert.alert(
            'Foo Title',
            alertMessage,
            '..............'.split('').map((dot, index) => ({
              text: 'Button ' + index,
              onPress: () => console.log('Pressed ' + index),
            })),
          )
        }>
        <View style={styles.button}>
          <Text>Alert with too many buttons</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.wrapper}
        onPress={() =>
          Alert.alert('', alertMessage, [
            {text: 'OK', onPress: () => console.log('OK Pressed!')},
          ])
        }>
        <View style={styles.button}>
          <Text>Alert without title</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default TheAlert;
