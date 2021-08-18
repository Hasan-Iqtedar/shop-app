import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import ShopScreen from "../screens/ShopScreen";
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import UserProductsScreen from '../screens/UserProductsScreen';
import EditProductScreen from '../screens/EditProductScreen';
import { Colors } from '../constants/Colors';
import CartScreen from '../screens/CartScreen';

const defaultScreenOptions = {
    headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor,
    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : 'white',
    },
    headerTitleStyle: {
        fontSize: 22,
    },
}

const ProductsStack = createStackNavigator();

function ProductsStackScreen({ navigation }) {
    return (
        <ProductsStack.Navigator screenOptions={defaultScreenOptions}
        >
            <ProductsStack.Screen
                name='productsScreen'
                component={ShopScreen}
                options={{
                    title: 'All Products',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                iconName='ios-menu'
                                onPress={navigation.toggleDrawer}
                            />
                        </HeaderButtons>
                    )
                }}
            />

            <ProductsStack.Screen
                name='productDetailsScreen'
                component={ProductDetailsScreen}
                options={{
                    title: 'Product Details'
                }}
            />

            <ProductsStack.Screen 
                name='cart'
                component={CartScreen}
                options={{title: 'Cart'}}
            />

        </ProductsStack.Navigator>
    );
}

const UserProductsStack = createStackNavigator();

function UserProductsStackScreen({ navigation }) {
    return (
        <UserProductsStack.Navigator
            screenOptions={defaultScreenOptions}
        >
            <UserProductsStack.Screen name='userProducts' component={UserProductsScreen}
                options={{
                    title: 'Your Products',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                iconName='ios-menu'
                                onPress={navigation.toggleDrawer}
                            />
                        </HeaderButtons>
                    )
                }}
            />

            <UserProductsStack.Screen name='userProductDetails' component={ProductDetailsScreen}
                options={{
                    title: 'Product Details'
                }}
            />

            <UserProductsStack.Screen name="editProduct" component={EditProductScreen}
                options={{
                    title: 'Edit Product'
                }}
            />
        </UserProductsStack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerLabelStyle: {color: Colors.secondaryColor, fontSize: 15} }}>
            <Drawer.Screen name='Shop' component={ProductsStackScreen} />
            <Drawer.Screen name='User Products' component={UserProductsStackScreen} />
        </Drawer.Navigator>
    );
}

