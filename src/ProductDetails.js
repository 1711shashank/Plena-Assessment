import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';



const ProductDetails = () => {
    return (
        <>
            <View style={{ width: '100%', height: '100%', paddingTop: 50, paddingHorizontal: 30 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <TouchableOpacity style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50 }} >
                        <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10, borderRadius: 50 }} >
                        <MaterialCommunityIcons name="shopping-outline" size={24} color="#1E222B" />
                    </TouchableOpacity>
                </View>

                <>
                    <Text style={{ fontSize: 50, fontWeight: 300, marginTop: 25 }}>
                        Thin Choise
                    </Text>
                    <Text style={{ fontSize: 50, fontWeight: 900 }}>
                        Top Orange
                    </Text>
                </>

                <Text style={{ color: '#A1A1AB', marginTop: 10 }}> 🌟🌟🌟🌟🌟 110 Reviews </Text>

                <Image
                    style={{ width: '120%', aspectRatio: 3 / 2, marginTop: 10, marginLeft: -30 }}
                    source={{ uri: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg' }}
                />


                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 25 }}>
                    <Text style={{ color: '#2A4BA0', fontWeight: 'bold' }}>$34.70</Text>
                    <Text style={{ color: '#2A4BA0' }}> /KG</Text>

                    <View style={{ backgroundColor: '#2A4BA0', borderRadius: 50, marginHorizontal: 12 }}>

                        <Text style={{ color: 'white', paddingHorizontal: 15, paddingVertical: 4 }}>$22.04 OFF</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#FFF', borderColor: '2A4BA0', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>
                            Add To Cart
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#2A4BA0', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white' }}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{ color: '#1E222B', fontSize: 16, marginVertical:6 }}>
                        Details
                    </Text>
                    <Text style={{ color: '#8891A5', fontSize: 16 }}>
                        Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.
                    </Text>
                </View>

            </View>
        </>
    )
}

export default ProductDetails