import {createContext, useContext, useMemo, useState, useCallback, useEffect} from 'react';
import React from "react";


const CarsContext = createContext();



const INITIAL_DATA = [
    {
        id: 1,
        name: 'Model S',
        tagline: 'Boek een testrit',
        motor: 'Single motor',
        year: 2018,
        price: '€70000',
        seats: 5,
        cruiseControl: 'no',
        dealer: 'Tesla Brussel',
        image: require('../assets/images/ModelS.jpeg'),
    }, {
        id: 2,
        name: 'Model 3',
        tagline: 'Boek een testrit',
        motor: 'Dual motor',
        year: 2019,
        price: '€80000',
        seats: 5,
        cruiseControl: 'no',
        dealer: 'Tesla Antwerpen',
        image: require('../assets/images/Model3.jpeg'),
    }, {
        id: 3,
        name: 'Model X',
        tagline: 'Boek een testrit',
        motor: 'Dual motor',
        year: 2020,
        price: '€90000',
        seats: 5,
        cruiseControl: 'yes',
        dealer: 'Tesla Brussel',
        image: require('../assets/images/ModelX.jpeg'),
    }, {
        id: 4,
        name: 'Model Y',
        tagline: 'Boek een testrit',
        motor: 'Boek een testrit',
        year: 2021,
        price: '€100000',
        seats: 5,
        cruiseControl: 'yes',
        dealer: 'Tesla Antwerpen',
        image: require('../assets/images/ModelY.jpeg'),
    },
];




export function CarsProvider(props) {
    const [cars, setCars] = useState(INITIAL_DATA);

    const onToggleIsSelected = useCallback(
        carToToggle => {
            const toggledCar = {...carToToggle, isSelected: !carToToggle.isSelected};
            console.log(toggledCar);
            setCars(cars.map(car => carToToggle.id === car.id ? toggledCar : car))
        },
        [cars, setCars]
        )
    ;

        useEffect(() =>{
        async function load(){
            setCars(INITIAL_DATA);
        }
        load()

    },[])

    const selectedCars = useMemo(() => cars.filter(car => car.isSelected), [cars]);
    console.log("Cars: " + selectedCars);


    const api = useMemo(() => ({
        cars, onToggleIsSelected, selectedCars
    }), [
        cars, onToggleIsSelected, selectedCars
    ]);
    return <CarsContext.Provider value={api}>
        {props.children}
    </CarsContext.Provider>
}



export const useCarsContext = () => useContext(CarsContext);