import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import CartItem from './CartItem';


const Cart = () => {
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', paddingTop: 50, paddingHorizontal: 30 }}>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50, marginRight: 20 }} >
                    <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                </View>
                <Text style={{ fontSize: 16 }}>Shopping Cart (5)</Text>
            </View>


            <CartItem />
            <CartItem />
            <CartItem />

            <View style={{ backgroundColor: '#F8F9FB', width: 380, height: 260, borderRadius: 30, padding: 20, position: 'absolute', bottom: -50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 20 }}>
                    <Text style={{ color: '#616A7D' }}>Subtotal</Text>
                    <Text style={{ color: '#1E222B' }}>$35.96</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 20 }}>
                    <Text style={{ color: '#616A7D' }}>Delivery</Text>
                    <Text style={{ color: '#1E222B' }}>$2.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 20 }}>
                    <Text style={{ color: '#616A7D' }}>Total</Text>
                    <Text style={{ color: '#1E222B', fontWeight: 500 }}>$37.96</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#2A4BA0', height: 56, borderRadius: 20, marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>
                        Proceed To checkout
                    </Text>
                </TouchableOpacity>

            </View>

        </View >
    )
}

export default Cart