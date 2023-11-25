import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';



const ProductCard = ({ productData }) => {

    const dispatch = useDispatch();
    const handleAddCart = (productData) => {
        dispatch(addItem(productData));
    }

    return (
        <>
            <Image
                style={{ width: '100%', height: '60%', borderRadius: 10 }}
                source={{ uri: productData.thumbnail }}
            />

            <TouchableOpacity style={{ position: 'absolute', top: 12, left: 12 }}>
                <Ionicons name="ios-heart-sharp" size={28} color="#FF8181" />
            </TouchableOpacity>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>

                <View style={{ width: '80%', padding: 10 }}>
                    <Text style={{ color: '#1E222B', fontWeight: 600 }}> $ {productData.price}</Text>
                    <Text style={{ color: '#616A7D', fontSize: 12 }} numberOfLines={2} ellipsizeMode="tail">{productData.title}</Text>
                </View>
                <TouchableOpacity onPress={() => handleAddCart(productData)} style={{ marginTop: 10, backgroundColor: '#2A4BA0', borderRadius: 50, padding: 5 }} >
                    <AntDesign name="plus" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>

        </>
    )
}

export default ProductCard