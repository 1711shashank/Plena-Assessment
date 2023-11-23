import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cart from './src/Cart';
import ProductDetails from './src/ProductDetails';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Cart/> */}
            <ProductDetails/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
