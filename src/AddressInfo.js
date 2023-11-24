import React from 'react'
import { Text, View } from 'react-native'


const AddressInfo = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
                <Text style={{ color: '#8891A5', fontSize: 11, fontWeight: 600 }}>DELIVERY TO</Text>
                <Text style={{ color: '#8891A5', fontSize: 11, fontWeight: 600 }}>WITHIN</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
                <Text style={{ color: '#F8F9FB' }}>Green Way 3000, Sylhet</Text>
                <Text style={{ color: '#F8F9FB' }}>1 Hour</Text>
            </View>
        </View>

    )
}

export default AddressInfo