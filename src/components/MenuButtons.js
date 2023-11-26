import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, Feather, Ionicons, } from '@expo/vector-icons';


const MenuButtons = ({ activeTab, navigation }) => {

    return (

        <View style={styles.menuButtons}>
            <View style={styles.menuButtonsWrapper}>


                <TouchableOpacity style={[styles.iconWrapper, { left: '0%' }, activeTab === 'Home' && { top: -20 }]} onPress={() => navigation.navigate('Home')}>
                    <View style={activeTab === 'Home' && styles.iconView} >
                        {
                            activeTab === 'Home'
                                ? <Entypo name="home" size={24} color='#E0B420' />
                                : <Feather name="home" size={24} color='#3E4554' />
                        }
                    </View>
                    <Text style={[styles.iconText, activeTab === 'Home' && { display: 'none' }]}> Home</Text>
                </TouchableOpacity >


                <TouchableOpacity style={[styles.iconWrapper, { left: '25%' }, activeTab === 'Categories' && { top: -20 }]} onPress={() => navigation.navigate('Categories')}>
                    <View style={activeTab === 'Categories' && styles.iconView} >
                        <Feather name="command" size={24} color={activeTab === 'Categories' ? '#E0B420' : '#3E4554'} />
                    </View>
                    <Text style={[styles.iconText, activeTab === 'Categories' && { display: 'none' }]}> Categories</Text>
                </TouchableOpacity >



                <TouchableOpacity style={[styles.iconWrapper, { left: '50%' }, activeTab === 'Favourite' && { top: -20 }]} onPress={() => navigation.navigate('Favourite')}>
                    <View style={activeTab === 'Favourite' && styles.iconView} >
                        {
                            activeTab === 'Favourite'
                                ? <Ionicons name="ios-heart" size={24} color='#E0B420' />
                                : <Ionicons name="ios-heart-outline" size={24} color='#3E4554' />
                        }
                    </View>
                    <Text style={[styles.iconText, activeTab === 'Favourite' && { display: 'none' }]}> Favourite</Text>
                </TouchableOpacity >



                <TouchableOpacity style={[styles.iconWrapper, { left: '75%' }, activeTab === 'More' && { top: -20 }]} onPress={() => navigation.navigate('More')}>
                    <View style={activeTab === 'More' && styles.iconView} >
                        <Entypo name="dots-three-vertical" size={24} color={activeTab === 'More' ? '#E0B420' : '#3E4554'} />
                    </View>
                    <Text style={[styles.iconText, activeTab === 'More' && { display: 'none' }]}> More</Text>
                </TouchableOpacity >


            </View>
        </View>
    )
}

export default MenuButtons



const styles = StyleSheet.create({

    menuButtons: {
        position: 'absolute', bottom: -20, flexDirection: 'row', backgroundColor: '#FFF', width: '100%',
        alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 35, height: 100, paddingBottom: 20
    },
    menuButtonsWrapper: {
        width: '90%', height: '100%', alignItems: 'center', justifyContent: 'center'
    },
    iconWrapper: {
        position: 'absolute', alignItems: 'center', width: '25%'
    },
    iconView: {
        backgroundColor: '#1E222B', padding: 15, borderRadius: 50
    },
    iconText: {
        color: '#8891A5', fontSize: 12, marginTop: 5
    }

})