import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {Header} from "./components/Header";
import {CarsProvider} from "./contexts/CarsContext";
import React from "react";

function ProvidedApp() {
    return (
        <>
            <View style={styles.container}>
                <Header/>
                <HomeScreen/>

            </View>
        </>
    )
}

export default function App() {
    return (
        <CarsProvider>
            <ProvidedApp/>
        </CarsProvider>
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
