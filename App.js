import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StyleSheet, } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ProductsNavigator from './navigation/ProductsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import productsReducer from './store/reducers/products';

enableScreens();

const rootReducer = combineReducers(
  {
    products: productsReducer
  });

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
