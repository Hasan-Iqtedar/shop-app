import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductsNavigator from './navigation/ProductsNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ProductsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
