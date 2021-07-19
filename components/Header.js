import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../StyleSheet/StyleHeader';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

/**
 * @author
 * @function Hearder
 **/
const Hearder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Icon style={styles.icon} name="menu" size={32} color="#FAFA07" />
        <Text style={styles.iconText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hearder;
