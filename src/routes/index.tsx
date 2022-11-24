import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

import Ionicons from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = 'home';

            if (route.name !== 'Home') {
              iconName = 'list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: '#e53030',
          tabBarInactiveTintColor: '#e5e5e5',
          header: props => <Header {...props} />,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Meus filmes" component={Movies} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
