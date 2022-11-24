import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Header: React.FC<BottomTabHeaderProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route.name}</Text>
    </View>
  );
};

export default Header;
