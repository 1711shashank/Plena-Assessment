import React from 'react'
import { Text, View } from 'react-native'
import MenuButtons from '../components/MenuButtons'

const Favourite = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Favourite Screen
            </Text>

            <MenuButtons activeTab='Favourite' navigation={navigation} />
        </View>
    )
}

export default Favourite