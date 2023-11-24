import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';



const ProductCard = () => {
    return (
        <View style={{ width: '45%', margin: 8, aspectRatio: 160 / 194, backgroundColor: '#F8F9FB', padding: 10, borderRadius: 15, alignItems: 'center', justifyContent: 'space-between' }}>
            <Image
                style={{ width: '100%', height: '60%', borderRadius: 10 }}
                source={{ uri: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg' }}
            />

            <TouchableOpacity style={{ position: 'absolute', top: 12, left: 12 }}>
                <Ionicons name="ios-heart-sharp" size={28} color="#FF8181" />
            </TouchableOpacity>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>

                <View style={{ width: '80%', padding: 10 }}>
                    <Text style={{ color: '#1E222B', fontWeight: 600 }}>$325</Text>
                    <Text style={{ color: '#616A7D', fontSize: 12 }} numberOfLines={2} ellipsizeMode="tail">Clown Tang H03 Kumar Shashank</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#2A4BA0', borderRadius: 50, padding: 5 }} >
                    <AntDesign name="plus" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default ProductCard