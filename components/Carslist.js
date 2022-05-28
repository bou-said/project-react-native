import {useCarsContext} from "../contexts/CarsContext";
import {Dimensions, FlatList, StyleSheet, View} from "react-native";
import React from "react";
import {CarItem} from "./CarItem";


export function CarsList() {
    const {cars} = useCarsContext();
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});

