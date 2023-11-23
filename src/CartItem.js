import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const CartItem = () => {
    return (
        <>
            <View style={{ width: '100%', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#EBEBFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 30, height: 40 }}
                        source={{ uri: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg' }}
                    />
                    <View style={{ paddingLeft: 20 }}>
                        <Text>Package 01</Text>
                        <Text>$7.90</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <TouchableOpacity style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginRight: 20, padding: 10 }} >
                        <AntDesign name="minus" size={20} color="black" />
                    </TouchableOpacity>

                    <Text style={{ color: '#1E222B' }}>1</Text>

                    <TouchableOpacity style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginLeft: 20, padding: 10 }} >
                        <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>

                </View>

            </View>
        </>
    )
}

export default CartItem