import React from 'react'
import { Text, View } from 'react-native'
import MenuButtons from '../components/MenuButtons';


const More = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                More Page
            </Text>
            <MenuButtons activeTab='More' navigation={navigation} />

        </View>
    )
}

export default More