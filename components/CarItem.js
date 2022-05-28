import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {NAV_CAR_DETAILS} from "../navigation_constants";
import {useCarsContext} from "../contexts/CarsContext";


export function CarItem({car}) {
    const navigation = useNavigation();

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={car.image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{car.name}</Text>
                <Text style={styles.subtitle}>
                    {car.tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {car.taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(NAV_CAR_DETAILS, {car})}>
                    <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
                </View>


        </View>
    )
}

const styles = StyleSheet.create({

    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonsContainer: tw`absolute w-full mt-4 mb-5 flex-row justify-center bottom-0`,
    button: tw`bg-black rounded-full p-3 m-auto w-30`,
    // touchable: (isSelected) => tw `p-3 flex-row items-center ${isSelected ? "bg-orange-100" : ""}`,
    buttonText: tw`text-white text-center`
});