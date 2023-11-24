import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cart from './src/Cart';
import ProductDetails from './src/ProductDetails';
import Home from './src/Home';

export default function App() {
    return (
        <View style={styles.container}>
            <Home/>
            {/* <Cart/> */}
            {/* <ProductDetails/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',        
    },
});
