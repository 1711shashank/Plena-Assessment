import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../redux/cartSlice';


const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch();

    const handleIncrement = (productData) => {
        dispatch(addItem(productData))
    }

    const handleDecrement = (productData) => {
        dispatch(removeItem(productData))
    }

    return (
        <>
            <View style={{ width: '100%', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#EBEBFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 35 }}
                        source={{ uri: cartItem?.products?.thumbnail }}
                    />
                    <View style={{ paddingLeft: 12 }}>
                        <Text style={{ fontSize: 12, width: 150, paddingBottom: 4 }}>{cartItem?.products?.title}</Text>
                        <Text style={{ fontSize: 12 }}>$ {cartItem?.products?.price}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <TouchableOpacity onPress={() => handleDecrement(cartItem.products)} style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginRight: 10, padding: 10 }} >
                        <AntDesign name="minus" size={20} color="black" />
                    </TouchableOpacity>

                    <Text style={{ color: '#1E222B' }}> {cartItem.quantity} </Text>

                    <TouchableOpacity onPress={() => handleIncrement(cartItem.products)} style={{ backgroundColor: '#F8F9FB', borderRadius: 50, marginLeft: 10, padding: 10 }} >
                        <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>

                </View>

            </View>
        </>
    )
}

export default CartItem