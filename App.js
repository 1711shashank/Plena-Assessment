import React from 'react'
import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import Favourite from './src/screens/Favourite';
import More from './src/screens/More';
import Cart from './src/screens/Cart';
import ProductScreen from './src/screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';


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

                <Stack.Screen
                    name="Categories"
                    component={Categories}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Favourite"
                    component={Favourite}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="More"
                    component={More}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
