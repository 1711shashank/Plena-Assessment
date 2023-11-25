import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';
import { useState } from 'react';
import { useEffect } from 'react';


const ProductScreen = ({ route, navigation }) => {

    const dispatch = useDispatch();
    const { productData } = route.params;
    const cartItems = useSelector((store) => store.cart.items);

    const [isExistInCart, setIsExistInCart] = useState(false);

    const handleCart = () => {
        const data = cartItems.find((item) => item.products.id === productData.id);
        if (data) {
            dispatch(removeItem(productData));
            setIsExistInCart(false);
        } else {
            dispatch(addItem(productData));
            setIsExistInCart(true);
        }

    }


    return (
        <>
            <ScrollView>

                <View style={{ width: '100%', height: '100%', paddingTop: 50, paddingBottom: 20, paddingHorizontal: 30 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <TouchableOpacity style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50 }} onPress={() => navigation.goBack()}>
                            <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ padding: 10, borderRadius: 50 }} >
                            <MaterialCommunityIcons name="shopping-outline" size={24} color="#1E222B" />
                        </TouchableOpacity>
                    </View>

                    <>
                        <Text style={{ fontSize: 50, fontWeight: 300, marginTop: 25 }}>
                            {productData.brand}
                        </Text>
                        <Text style={{ fontSize: 40, fontWeight: 800 }}>
                            {productData.title}
                        </Text>
                    </>

                    <Rating type="custom" tintColor="#f2f2f2" ratingBackgroundColor='#d9d9d9' imageSize={20} startingValue={productData.rating} style={{ alignSelf: 'flex-start' }} />


                    <Image
                        style={{ width: '120%', aspectRatio: 7 / 4, marginTop: 10, marginLeft: -30 }}
                        source={{ uri: productData.thumbnail }}
                    />


                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 25 }}>
                        <Text style={{ color: '#2A4BA0', fontWeight: 'bold' }}>$ {productData.price}</Text>

                        <View style={{ backgroundColor: '#2A4BA0', borderRadius: 50, marginHorizontal: 12 }}>
                            <Text style={{ color: 'white', paddingHorizontal: 15, paddingVertical: 4 }}>$ {(productData.price * (productData.discountPercentage) / 100).toFixed(2)} OFF</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#FFF', borderColor: '2A4BA0', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={handleCart}>
                            {
                                isExistInCart
                                    ? <Text> Remove To Cart</Text>
                                    : <Text> Add To Cart</Text>
                            }

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#2A4BA0', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Cart')}>
                            <Text style={{ color: 'white' }}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: '#1E222B', fontSize: 16, marginVertical: 6 }}>
                            Details
                        </Text>
                        <Text style={{ color: '#8891A5', fontSize: 16 }}>
                            {productData.description}
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default ProductScreen