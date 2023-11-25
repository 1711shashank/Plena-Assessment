import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import Favourite from './src/screens/Favourite';
import More from './src/screens/More';
import Cart from './src/screens/Cart';
import ProductScreen from './src/screens/ProductScreen';
import MenuButtons from './src/components/MenuButtons';

import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductScreen"
                    component={ProductScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
