import React from 'react';
import {View, Text, FlatList, TouchableHighlight, Image} from 'react-native';
import products from '../data/product.json';
import styles from '../StyleSheet/StyleHome';
import Card from '../components/Card';

/**
 * @author
 * @function TheFlatList
 **/
const TheFlatList = ({navigation}) => {
  const {container} = styles;
  const renderRecipes = ({item}) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => navigation.openDrawer()}>
        <Card>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text>{item.name}</Text>
          <View style={styles.footer}>
            <Text>{item.price}</Text>
          </View>
        </Card>
      </TouchableHighlight>
    );
  };
  return (
    <View style={container}>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={products}
        renderItem={item => renderRecipes(item)}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default TheFlatList;
