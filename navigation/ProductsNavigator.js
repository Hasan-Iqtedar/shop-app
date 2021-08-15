import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopScreen from "../screens/ShopScreen";
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import UserProductsScreen from '../screens/UserProductsScreen';


const ProductsStack = createStackNavigator();

function ProductsStackScreen() {
    return (
        <ProductsStack.Navigator>
            <ProductsStack.Screen
                name='productsScreen'
                component={ShopScreen}
                options={{
                    title: 'All Products',
                    headerRight: () => (
                        <Ionicons name='ios-cart' size={22}></Ionicons>
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

        </ProductsStack.Navigator>
    );
}

const UserProductsStack = createStackNavigator();

function UserProductsStackScreen() {
    return (
        <UserProductsStack.Navigator>
            <UserProductsStack.Screen name='userProducts' component={UserProductsScreen}
                options={{
                    title: 'Your Products'
                }}
            />

            <UserProductsStack.Screen name='userProductDetails' component={ProductDetailsScreen}
                options={{
                    title: 'Product Details'
                }}
            />
        </UserProductsStack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Shop' component={ProductsStackScreen} />
            <Drawer.Screen name='User Products' component={UserProductsStackScreen} />
        </Drawer.Navigator>
    );
}

