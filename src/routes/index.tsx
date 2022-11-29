import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

import Ionicons from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../pages/Splash';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppTab: React.FC = () => (
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
);

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="splash"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="app" component={AppTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
