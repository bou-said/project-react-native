import React from "react";
import {Text, StyleSheet} from "react-native";
import {CarsList} from "../components/Carslist";
import {Header} from "../components/Header";

export function HomeScreen() {
    return (
        <>
            <Header/>
            <CarsList/>
        </>
    )

}