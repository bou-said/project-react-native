import {Image, Text, StyleSheet, View} from "react-native";
import React from "react";
import {Card} from "react-native-elements";
import tw from "twrnc";

//import WebView from "react-native-webview";


export function DealerScreen() {

    return (
        <View>
            <Card>
                <View>
                    <Image source={require('../assets/images/Garage.jpg')} style={tw`w-full h-44 mb-3`}/>

                    <Text style={styles.title}>
                        Tesla Aartselaar:
                    </Text>
                    <Text style={styles.description}>
                        Ontdek hier de huidige voorraad van alle onmiddellijk beschikbare stockvoertuigen.

                        Heeft u interesse in een nieuwe of tweedehands Tesla uit stock?
                        Neem dan spoedig contact met ons op & ontvang een offerte op maat.

                        Zo rijdt u in geen tijd buiten met de Tesla van uw dromen.
                    </Text>

                    <Text style={tw`text-center mb-3 text-xl font-semibold`}>Openingsuren:</Text>
                    <Text style={tw`text-center`}>Maandag 09:00 - 19:00</Text>
                    <Text style={tw`text-center`}>Dinsdag 09:00 - 19:00</Text>
                    <Text style={tw`text-center`}>Woensdag: Gesloten</Text>
                    <Text style={tw`text-center`}>Donderdag: Gesloten</Text>
                    <Text style={tw`text-center`}>Vrijdag 09:00 - 20:00</Text>
                    <Text style={tw`text-center`}>Zaterdag 09:00 - 12:00</Text>
                </View>




            </Card>
        </View>

    )
}

const styles = StyleSheet.create(
    {
        title: tw`text-center mb-3 text-2xl font-semibold underline`,
        description: tw`text-gray-500 mb-3 text-justify`,
        detailButton: tw`bg-gray-600 text-center text-white p-3`,
    }
)