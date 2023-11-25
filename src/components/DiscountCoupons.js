import React from 'react'
import { Image, TouchableOpacity, View, ScrollView } from 'react-native'

const DiscountCoupons = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}            >

            <View style={{ flexDirection: 'row', margin: 20, height: '100%' }}>
                <TouchableOpacity>
                    <Image
                        style={{ width: 270, height: 123, borderRadius: 10, marginRight: 20 }}
                        source={require('../../Images/OfferImg.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ width: 270, height: 123, borderRadius: 10 }}
                        source={require('../../Images/OfferImg.png')}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DiscountCoupons