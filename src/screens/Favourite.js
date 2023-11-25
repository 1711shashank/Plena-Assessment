import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MenuButtons from '../components/MenuButtons'
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';

const Favourite = ({ navigation }) => {

    const favouriteItems = useSelector((store) => store.favourite.items);


    return (
        <View style={{ flex: 1, paddingTop: 50 }}>

            <Text style={{ color: '#1E222B', fontSize: 30, paddingVertical: 5 }}>  Favourite's    </Text>
            <View style={{ width: '100%', justifyContent:'flex-start', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'flex-start' }}>

                {favouriteItems?.map((item) => (
                    <TouchableOpacity
                        style={styles.producCard} key={item.id}
                        onPress={() => navigation.push('ProductScreen', { productData: item })}
                    >
                        <ProductCard productData={item} />
                    </TouchableOpacity>
                ))}

            </View>

            <MenuButtons activeTab='Favourite' navigation={navigation} />
        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    producCard: {
        width: '45%',
        aspectRatio: 160 / 194,
        margin: 8,
        backgroundColor: '#F8F9FB',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
