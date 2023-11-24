import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, Feather, Ionicons, } from '@expo/vector-icons';


const MenuButtons = ({ activeIcon, setActiveIcon }) => {
    return (

        <View style={styles.menuButtons}>

            <View style={styles.menuButtonsWrapper}>

                <TouchableOpacity style={[styles.iconWrapper, { left: '0%' }, activeIcon === 'Home' && { top: -20 }]} onPress={() => setActiveIcon('Home')}>
                    <View style={activeIcon === 'Home' && styles.iconView} >
                        {
                            activeIcon === 'Home'
                                ? <Entypo name="home" size={24} color='#E0B420' />
                                : <Feather name="home" size={24} color='#3E4554' />
                        }
                    </View>
                    <Text style={[styles.iconText, activeIcon === 'Home' && { display: 'none' }]}> Home</Text>
                </TouchableOpacity >

                <TouchableOpacity style={[styles.iconWrapper, { left: '25%' }, activeIcon === 'Categories' && { top: -20 }]} onPress={() => setActiveIcon('Categories')}>
                    <View style={activeIcon === 'Categories' && styles.iconView} >
                        <Feather name="command" size={24} color={activeIcon === 'Categories' ? '#E0B420' : '#3E4554'} />
                    </View>
                    <Text style={[styles.iconText, activeIcon === 'Categories' && { display: 'none' }]}> Categories</Text>
                </TouchableOpacity >

                <TouchableOpacity style={[styles.iconWrapper, { left: '50%' }, activeIcon === 'Favourite' && { top: -20 }]} onPress={() => setActiveIcon('Favourite')}>
                    <View style={activeIcon === 'Favourite' && styles.iconView} >
                        {
                            activeIcon === 'Favourite'
                                ? <Ionicons name="ios-heart" size={24} color='#E0B420' />
                                : <Ionicons name="ios-heart-outline" size={24} color='#3E4554' />
                        }
                    </View>
                    <Text style={[styles.iconText, activeIcon === 'Favourite' && { display: 'none' }]}> Favourite</Text>
                </TouchableOpacity >

                <TouchableOpacity style={[styles.iconWrapper, { left: '75%' }, activeIcon === 'More' && { top: -20 }]} onPress={() => setActiveIcon('More')}>
                    <View style={activeIcon === 'More' && styles.iconView} >
                        <Entypo name="dots-three-vertical" size={24} color={activeIcon === 'More' ? '#E0B420' : '#3E4554'} />
                    </View>
                    <Text style={[styles.iconText, activeIcon === 'More' && { display: 'none' }]}> More</Text>
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