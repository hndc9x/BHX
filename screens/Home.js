/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = {uri: 'https://reactjs.org/logo-og.png'};

//using ImageBackground

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Home Screen</Text>
        <Button title="Drawer" onPress={() => navigation.openDrawer()} />
        <Text> </Text>
        <Button title="Stack" onPress={() => navigation.navigate('Modal')} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default HomeScreen;
