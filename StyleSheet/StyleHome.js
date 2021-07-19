import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4a6a8',
    marginTop: 5,
  },
  view: {
    backgroundColor: 'white',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
  },
  promotion: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  cloded: {
    fontSize: 15,
    textAlign: 'right',
    marginLeft: 160,
  },
  image: {
    width: 90,
    height: 120,
    top: -15,
  },
  footer: {
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
});

export default styles;
