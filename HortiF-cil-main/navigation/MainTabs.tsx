import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import PerfilStack from '../navigation/PerfilStack'; 

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#555',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'storefront-outline';
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = 'account-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Lojas' }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarLabel: 'Carrinho' }}
      />
      <Tab.Screen
        name="Profile"
        component={PerfilStack} 
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
