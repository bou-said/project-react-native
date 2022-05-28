import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {Header} from "./components/Header";
import {CarsProvider} from "./contexts/CarsContext";
import {NAV_HOME, NAV_CAR_DETAILS, NAV_CAR_EDIT} from "./navigation_constants";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {CarDetailsScreen} from "./screens/CarDetailsScreen";
import tw from 'twrnc';
import React from "react";

const Stack = createNativeStackNavigator();

function ProvidedApp() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={NAV_HOME} component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name={NAV_CAR_DETAILS} component={CarDetailsScreen}/>
            </Stack.Navigator>
        </>
    )
}



export default function App() {
    return (
        <NavigationContainer>
            <CarsProvider>
                <ProvidedApp/>
            </CarsProvider>
        </NavigationContainer>
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
