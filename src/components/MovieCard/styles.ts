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
  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {},
});
