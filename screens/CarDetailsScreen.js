import {ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from "react-native";
import tw from "twrnc";
import {useCarsContext} from "../contexts/CarsContext";
import {useNavigation} from "@react-navigation/native";
import {NAV_CAR_DETAILS, NAV_CAR_DEALER} from "../navigation_constants";
import React from "react";


function CarProperty({value, title}) {

    return (
        <View style={stylesCarProp.container}>
            <Text style={stylesCarProp.title}>{title}</Text>
            <Text style={stylesCarProp.value}>{value}</Text>
            <View style={[stylesCarProp.hairline, stylesCarProp.hairlineBare]}/>
        </View>
    );
}

const stylesCarProp = StyleSheet.create(
    {
        container: tw`bg-gray-100 m-2 pb-4 rounded-xl`,
        title: tw`px-8 font-semibold text-gray-400 text-lg`,
        value: tw`px-8`,
        hairline: tw`mx-8`,
        hairlineBare: {height: StyleSheet.hairlineWidth, backgroundColor: "gray"},
    }
)


export function CarDetailsScreen({route}) {
    const navigation = useNavigation();
    const {car} = route.params
    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <CarProperty value={car.name} title="Naam"/>
                    <CarProperty value={car.motor} title="Motor"/>
                    <CarProperty value={car.year} title="Jaar"/>
                    <CarProperty value={car.seats} title="Aantal Zetels"/>
                    <CarProperty value={car.cruiseControl} title="Cruisecontrol"/>
                    <CarProperty value={car.range} title="Bereik"/>
                    <CarProperty value={car.topSpeed} title="Topsnelheid"/>
                    <CarProperty value={car.color} title="Kleur"/>
                    <CarProperty value={car.price} title="Price"/>


                </ScrollView>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(NAV_CAR_DEALER)}>
                        <Text style={styles.buttonText}>{car.dealer}</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </>
    )
}

const styles = StyleSheet.create(
    {
        container: tw`h-full bg-black`,
        banner: tw`p-5 flex-row bg-orange-200`,
        bannerText: tw`text-purple-900 font-bold text-lg text-center flex-stretch`,
        scrollview: tw`mb-3`,

        buttonsContainer: tw`absolute w-full mt-4 mb-5 flex-row justify-center bottom-0`,
        button: tw`bg-white rounded-full p-3 m-auto w-30`,
        buttonText: tw`text-black text-center`

    }
)
