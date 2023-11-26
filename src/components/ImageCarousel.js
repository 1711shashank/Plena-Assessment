import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';


const ImageCarousel = ({ images, isFavourite, handleFavourite }) => {

    return (

        <View>

            <Swiper style={{ height: 350 }} loop={false}>

                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={{ flex: 1, resizeMode: 'contain' }}
                    />
                ))}
            </Swiper>

            <TouchableOpacity onPress={handleFavourite} style={{ position: 'absolute', backgroundColor: '#fff', padding: 12, paddingBottom: 8, borderRadius: 15, top: 20, right: 15 }}>
                {
                    isFavourite
                        ? <Ionicons name="ios-heart-sharp" size={28} color="#FF8181" />
                        : <Ionicons name="ios-heart-outline" size={28} color="#3E4554" />
                }
            </TouchableOpacity>
        </View>

    );
};

export default ImageCarousel;
