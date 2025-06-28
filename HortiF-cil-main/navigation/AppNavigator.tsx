import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import MainTabs from './MainTabs';
import PerfilStack from './PerfilStack';

import CartCheckoutScreen from '../screens/CartCheckoutScreen';
import DeliveryOptionsScreen from '../screens/DeliveryOptionsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PixQRCodeScreen from '../screens/PixQRCodeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="PerfilStack" component={PerfilStack} />
      <Stack.Screen name="CartCheckout" component={CartCheckoutScreen} />
      <Stack.Screen name="DeliveryOptions" component={DeliveryOptionsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PixQRCode" component={PixQRCodeScreen} />
    </Stack.Navigator>
  );
}
