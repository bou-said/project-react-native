import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {NAV_CAR_DETAILS, NAV_CAR_DEALER, NAV_CONTACT_FORM} from "../navigation_constants";
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
                <TouchableOpacity style={styles.subtitle} onPress={() => navigation.navigate(NAV_CONTACT_FORM) }>
                    <Text>{car.tagline}</Text>


                </TouchableOpacity>
                <TouchableOpacity style={styles.subtitle} onPress={() => onToggleIsSelected(car) }>
                    <Icon type="ionicon" name={(car.isSelected) ? 'heart' : 'heart-outline'}></Icon>


                </TouchableOpacity>

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
    // touchable: (isSelected) => tw `p-3 flex-row items-center ${isSelected ? "bg-orange-100" : ""}`,
    buttonText: tw`text-white text-center`
});