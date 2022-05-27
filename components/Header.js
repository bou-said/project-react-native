import {Image, View, StyleSheet} from "react-native";


export function Header(){
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },

});