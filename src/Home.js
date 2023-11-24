import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from './SearchBar'
import AddressInfo from './AddressInfo'
import MenuButtons from './MenuButtons'
import ProductCard from './ProductCard'
import DiscountCoupons from './DiscountCoupons';



const Home = () => {

    const [activeIcon, setActiveIcon] = useState('Home');
    const [searchQuery, setSearchQuery] = React.useState('');



    return (
        <View style={{ width: '100%', flex: 1, paddingTop: -20, }}>


            <View style={{ backgroundColor: '#2A4BA0', height: 280, paddingHorizontal: 20, paddingTop: 60 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 22, color: '#F8F9FB' }}> Hi, Rahul</Text>
                    <TouchableOpacity style={{ marginTop: 10, padding: 10, borderRadius: 50 }} >
                        <MaterialCommunityIcons name="shopping-outline" size={24} color="#F8F9FB" />
                    </TouchableOpacity>
                </View>

                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <AddressInfo />

            </View>

            <ScrollView>

                <DiscountCoupons />
                
                <Text style={{ color: '#1E222B', fontSize: 30, paddingVertical: 5 }}> Recommended </Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'flex-start' }}>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </View>
            </ScrollView>


            <MenuButtons activeIcon={activeIcon} setActiveIcon={setActiveIcon} />

        </View >
    )
}

export default Home

