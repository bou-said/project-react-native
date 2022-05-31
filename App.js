import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {Header} from "./components/Header";
import {CarsProvider} from "./contexts/CarsContext";
import {
    NAV_HOME,
    NAV_CAR_DETAILS,
    NAV_CAR_FAVORITE,
    NAV_CAR_DEALER,
    NAV_CONTACT_FORM
} from "./navigation_constants";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {CarDetailsScreen} from "./screens/CarDetailsScreen";
import {ContactFormScreen} from "./screens/ContactFormScreen";
import React from "react";
import {CarFavoriteScreen} from "./screens/CarFavoriteScreen";
import {DealerScreen} from "./screens/DealerScreen";

const Stack = createNativeStackNavigator();

function ProvidedApp() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={NAV_HOME} component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name={NAV_CAR_DETAILS} component={CarDetailsScreen}/>
                <Stack.Screen name={NAV_CAR_FAVORITE} component={CarFavoriteScreen}/>
                <Stack.Screen name={NAV_CAR_DEALER} component={DealerScreen}/>
                <Stack.Screen name={NAV_CONTACT_FORM} component={ContactFormScreen}/>
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
