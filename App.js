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


export default function App() {

    const [activeScreen, setActiveScreen] = useState('Home');
    const [activeTab, setActiveTab] = useState('Home');

    const [productsData, setProductsData] = useState([]);


    const fetchData = async () => {

        const response = await axios.get('https://dummyjson.com/products');
        setProductsData(response.data.products);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={{ flex: 1 }}>

            {activeScreen === 'ProductScreen' && <ProductScreen setActiveScreen={setActiveScreen} />}
            {activeScreen === 'Cart' && <Cart setActiveScreen={setActiveScreen} />}
            {activeScreen === 'Home'
                &&
                <View style={{ width: '100%', flex: 1, paddingTop: -20, }}>

                    {activeTab === 'Home' && <Home productsData={productsData} />}
                    {activeTab === 'Categories' && <Categories />}
                    {activeTab === 'Favourite' && <Favourite />}
                    {activeTab === 'More' && <More />}

                    <MenuButtons activeTab={activeTab} setActiveTab={setActiveTab} />
                </View >
            }
        </View>
    );
}
