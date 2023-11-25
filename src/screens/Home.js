import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import AddressInfo from '../components/AddressInfo';
import ProductCard from '../components/ProductCard';
import DiscountCoupons from '../components/DiscountCoupons';
import MenuButtons from '../components/MenuButtons';

import axios from 'axios';

const Home = ({ navigation }) => {

    const [productsData, setProductsData] = useState([]);

    const fetchData = async () => {

        const response = await axios.get('https://dummyjson.com/products');
        setProductsData(response.data.products);

    }

    useEffect(() => {
        fetchData();
    }, [])

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={{ flex: 1 }}>

            <View style={{ backgroundColor: '#2A4BA0', height: 280, paddingHorizontal: 20, paddingTop: 60 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 22, color: '#F8F9FB' }}> Hi, Rahul</Text>
                    <TouchableOpacity style={{ marginTop: 10, padding: 10, borderRadius: 50 }}>
                        <MaterialCommunityIcons onPress={() => navigation.navigate('Cart')} name="shopping-outline" size={24} color="#F8F9FB" />
                    </TouchableOpacity>
                </View>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <AddressInfo />
            </View>

            <ScrollView>
                <DiscountCoupons />
                <Text style={{ color: '#1E222B', fontSize: 30, paddingVertical: 5 }}> Recommended </Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'flex-start' }}>

                    {productsData?.map((item) => (
                        <TouchableOpacity
                            style={styles.producCard} key={item.id}
                            onPress={() => navigation.push('ProductScreen', { productData: item })}
                        >
                            <ProductCard productData={item} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <MenuButtons activeTab='Home' navigation={navigation} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    producCard: {
        width: '45%',
        aspectRatio: 160 / 194,
        margin: 8,
        backgroundColor: '#F8F9FB',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
