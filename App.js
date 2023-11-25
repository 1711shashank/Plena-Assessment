import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import Categories from './src/Categories';
import Favourite from './src/Favourite';
import More from './src/More';
import Cart from './src/Cart';
import ProductScreen from './src/ProductScreen';

import React, { useState } from 'react'
import MenuButtons from './src/MenuButtons';


export default function App() {

    const [activeScreen, setActiveScreen] = useState('ProductScreen');
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <View style={{ flex: 1 }}>

            {activeScreen === 'ProductScreen' && <ProductScreen setActiveScreen={setActiveScreen} />}
            {activeScreen === 'Cart' && <Cart setActiveScreen={setActiveScreen} />}
            {activeScreen === 'Home'
                &&
                <View style={{ width: '100%', flex: 1, paddingTop: -20, }}>

                    {activeTab === 'Home' && <Home />}
                    {activeTab === 'Categories' && <Categories />}
                    {activeTab === 'Favourite' && <Favourite />}
                    {activeTab === 'More' && <More />}

                    <MenuButtons activeTab={activeTab} setActiveTab={setActiveTab} />
                </View >
            }
        </View>
    );
}
