import {ScrollView, StyleSheet, Text, View} from "react-native";
import tw from "twrnc";
import {useCarsContext} from "../contexts/CarsContext";

function Banner({car}) {
    return (
        <View>
            <Text>{car.name}</Text>
        </View>
    );
}

export function CarDetailsScreen({route}){
    const{car} = route.params
    return(
            <Banner car={car}/>
    )
}

