import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import data from '../data/sectionsList.json';

/**
 * @author
 * @function TheSectionList
 **/
const TheSectionList = props => {
  const Item = ({item}) => (
    <TouchableOpacity onPress={() => Alert.alert(item)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item item={item} />} //Kiem dạng mãng
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )} //section bat buoc
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#0EF0CE',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default TheSectionList;
