/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button title="Click me" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}
export default HomeScreen;
