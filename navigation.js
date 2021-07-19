import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from './screens/User';
import UserDetails from './screens/UserDetails';

const MainApp = createStackNavigator({
  Home: {
    screen: User,
    navigationOptions: {
      headerTitle: 'User',
    },
    path: 'home',
  },
  Details: {
    screen: UserDetails,
    navigationOptions: {
      headerTitle: 'Details',
    },
    path: 'details/:userId',
  },
});

// export default () => {
//   const prefix = 'myapp://';
//   return <AppContainer uriPrefix={prefix} />;
// };
