import {useCarsContext} from "../contexts/CarsContext";
import {Dimensions, FlatList, StyleSheet, View} from "react-native";
import React from "react";
import {CarFavoriteItem} from "./CarFavoriteItem";


export function CarsFavoriteList() {
    const {selectedCars} = useCarsContext();
    return (
        <View style={styles.container}>
            <FlatList
                data={selectedCars}
                renderItem={({item}) => <CarFavoriteItem car={item}/>}
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

