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
import TheSectionList from './screens/SectionList';
import {ModalPortal} from 'react-native-modals';
import Web from './screens/WebView';
//linkdeep
import linking from './linking';
//user
import User from './screens/User';
import UserDetails from './screens/UserDetails';

import Header from './components/Header';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const rootStack = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          backgroundColor: '#D5D1D1',
          headerLeft: () => <Header />,
        }}>
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <React.Fragment>
      {/* <NavigationContainer>
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
          <Drawer.Screen name="SectionList" component={TheSectionList} />
          <Drawer.Screen name="User" component={User} />
          <Drawer.Screen name="UserDetails" component={UserDetails} />
          <Drawer.Screen name="Stack" component={rootStack} />
          <Drawer.Screen name="Web" component={Web} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{
            backgroundColor: '#D5D1D1',
            headerLeft: () => <Header />,
          }}>
          <Stack.Screen name="Modal" component={Modal} />
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      <ModalPortal />
    </React.Fragment>
  );
};
export default App;
