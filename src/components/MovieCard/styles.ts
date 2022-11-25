import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e5eeee',
    marginVertical: 5,
    width: '95%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  img: {
    borderRadius: 5,
    width: 100,
    height: 160,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
  },

  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',

    padding: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e5e5ff',
    height: 40,
  },
});
