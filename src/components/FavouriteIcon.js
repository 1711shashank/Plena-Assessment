import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const FavouriteIcon = ({ isFavourite, handleFavourite }) => {
    return (
        <>
            <TouchableOpacity onPress={handleFavourite} style={{ position: 'absolute', backgroundColor: '#fff', padding: 12, paddingBottom: 8, borderRadius: 15, top: 20, right: 15 }}>
                {
                    isFavourite
                        ? <Ionicons name="ios-heart-sharp" size={28} color="#FF8181" />
                        : <Ionicons name="ios-heart-outline" size={28} color="#3E4554" />
                }
            </TouchableOpacity>
        </>
    )
}

export default FavouriteIcon