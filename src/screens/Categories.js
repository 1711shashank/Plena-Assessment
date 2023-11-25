import React from 'react'
import { Text, View } from 'react-native'
import MenuButtons from '../components/MenuButtons'

const Categories = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Categories Page
            </Text>

            <MenuButtons activeTab='Categories' navigation={navigation} />

        </View>
    )
}

export default Categories