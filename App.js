import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//screens
import HomeScreen from './screens/Home';
import Alert from './screens/Alert';
import ActiviIndicator from './screens/ActivityIndicator';
import FlatList from './screens/FlastList';
import Keyboard from './screens/Keyboard';
import Modal from './screens/Modal';
import {ModalPortal} from 'react-native-modals';

import Header from './components/Header';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const rootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          backgroundColor: '#D5D1D1',
          headerLeft: () => <Header />,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alert" component={Alert} />
        <Stack.Screen name="ActiviIndicator" component={ActiviIndicator} />
        <Stack.Screen name="FlatList" component={FlatList} />
        <Stack.Screen name="Keyboard" component={Keyboard} />
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor: '#D5D1D1',
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Alert" component={Alert} />
          <Drawer.Screen name="ActiviIndicator" component={ActiviIndicator} />
          <Drawer.Screen name="FlatList" component={FlatList} />
          <Drawer.Screen name="Keyboard" component={Keyboard} />
          <Drawer.Screen name="Modal" component={Modal} />
          <Drawer.Screen name=" " component={rootStack} />
        </Drawer.Navigator>
      </NavigationContainer>
      <ModalPortal />
    </React.Fragment>
  );
};
export default App;
