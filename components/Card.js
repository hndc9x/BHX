import React from 'react';
import {View, Text} from 'react-native';
import styles from '../StyleSheet/StyleCard';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}
