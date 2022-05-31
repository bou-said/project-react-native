import {CarsList} from "../components/Carslist";
import {ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from "react-native";
import React from "react";
import {CarsFavoriteList} from "../components/CarsFavoriteList";

export function CarFavoriteScreen(){
    return(
        <CarsFavoriteList/>
    )
}