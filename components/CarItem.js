import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {NAV_CAR_DETAILS, NAV_CAR_FAVORITE} from "../navigation_constants";
import {useCarsContext} from "../contexts/CarsContext";
import {Icon} from "react-native-elements";


export function CarItem({car}) {
    const navigation = useNavigation();
    const {onToggleIsSelected} = useCarsContext();

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={car.image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{car.name}</Text>
                <Text>Voeg toe aan favorieten:</Text>
                <TouchableOpacity onPress={() => onToggleIsSelected(car)}>
                    <Icon type="ionicon"  raised color={"red"} name={(car.isSelected) ? 'heart' : 'heart-outline'}></Icon>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(NAV_CAR_DETAILS, {car})}>
                    <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(NAV_CAR_FAVORITE)}>
                    <Text style={styles.buttonText}>Favorieten</Text>
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

    subtitle: {
        fontSize: 20,
        color: 'black',
        textDecorationLine: 'underline',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonsContainer: tw`absolute w-full mt-4 mb-5 flex-row justify-center bottom-0`,
    button: tw`bg-black rounded-full p-3 m-auto w-30`,
    buttonText: tw`text-white text-center`
});