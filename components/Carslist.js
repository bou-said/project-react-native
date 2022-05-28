import {useCarsContext} from "../contexts/CarsContext";
import {View, StyleSheet, FlatList, ImageBackground, Dimensions, Text, TouchableOpacity} from "react-native";
import React from "react";


function CarItem({car}) {
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


            <TouchableOpacity onPress={() => {
                console.warn("Custom Order was pressed");
            }}>
                <Text>Custom Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                console.warn("Existing Inventory was pressed");
            }}>
                <Text>Custom Order</Text>
            </TouchableOpacity>


        </View>
    )
}

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

/*const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});*/

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
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

    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    }
});