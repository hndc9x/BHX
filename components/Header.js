import React from 'react';
import {View, Text} from 'react-native';
import styles from '../StyleSheet/StyleHeader';
import Icon from 'react-native-vector-icons/Feather';

/**
 * @author
 * @function Hearder
 **/
const Hearder = props => {
  return (
    <View style={styles.header}>
      <Icon style={styles.icon} name="menu" size={30} color="#900" />
    </View>
  );
};

export default Hearder;
