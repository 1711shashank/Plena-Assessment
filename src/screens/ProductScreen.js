import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Rating } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';
import { addItemToFavourite, removeItemToFavourite } from '../redux/favouriteSlice';
import { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import ProductName from '../components/ProductName';
import ProductPrice from '../components/ProductPrice';
import ProductDetails from '../components/ProductDetails';


const ProductScreen = ({ route, navigation }) => {

    const dispatch = useDispatch();
    const { productData } = route.params;

    const cartItems = useSelector((store) => store.cart.items);
    const favouriteItems = useSelector((store) => store.favourite.items);
    const [isFavourite, setIsFavourite] = useState(favouriteItems.find((item) => item.id === productData.id));
    const [isExistInCart, setIsExistInCart] = useState(cartItems.find((item) => item.products.id === productData.id));

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

    const handleBuyNow = () => {

        const data = cartItems.find((item) => item.products.id === productData.id);

        if (!data) {
            dispatch(addItem(productData));
            setIsExistInCart(true);
        }

        navigation.navigate('Cart');
    }

    const handleFavourite = () => {
        const data = favouriteItems.find((item) => item.id === productData.id);

        if (data) {
            dispatch(removeItemToFavourite(productData));
            setIsFavourite(false);
        } else {
            dispatch(addItemToFavourite(productData));
            setIsFavourite(true)
        }
    }


    return (
        <>
            <ScrollView>
                <View style={{ width: '100%', height: '100%', paddingTop: 40, paddingBottom: 20, }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 30 }}>
                        <TouchableOpacity style={{ backgroundColor: '#F8F9FB', padding: 10, borderRadius: 50 }} onPress={() => navigation.goBack()}>
                            <Entypo name="chevron-small-left" size={24} color="#1E222B" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ padding: 10, borderRadius: 50 }} >
                            <MaterialCommunityIcons name="shopping-outline" size={24} color="#1E222B" />
                            <View style={{ position: 'absolute', right: 0, borderRadius: 50, width: 24, aspectRatio: 1 / 1, backgroundColor: '#F9B023', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>{cartItems.length}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <ProductName productData={productData} />
                    <Rating type="custom" tintColor="#f2f2f2" ratingBackgroundColor='#d9d9d9' imageSize={20} startingValue={productData.rating} style={{ paddingHorizontal: 30, alignSelf: 'flex-start', marginVertical: 10 }} />
                    <ImageCarousel images={productData.images} isFavourite={isFavourite} handleFavourite={handleFavourite} />
                    <ProductPrice productData={productData} />
                    <View style={{ paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#FFF', borderColor: '2A4BA0', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={handleCart}>
                            {
                                isExistInCart
                                    ? <Text> Remove To Cart</Text>
                                    : <Text> Add To Cart</Text>
                            }

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '46%', borderRadius: 20, height: 56, backgroundColor: '#2A4BA0', alignItems: 'center', justifyContent: 'center' }} onPress={handleBuyNow}>
                            <Text style={{ color: 'white' }}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ProductDetails productData={productData} />

                </View>
            </ScrollView>
        </>
    )
}

export default ProductScreen