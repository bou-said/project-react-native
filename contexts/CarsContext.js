import {createContext, useContext, useMemo, useState, useCallback} from 'react';
import React from "react";


const CarsContext = createContext();



const INITIAL_DATA = [
    {
        id: 1,
        name: 'Model S',
        tagline: 'Starting at $69,420',
        image: require('../assets/images/ModelS.jpeg'),
    }, {
        id: 2,
        name: 'Model 3',
        tagline: 'Starting at $79,420',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/Model3.jpeg'),
    }, {
        id: 3,
        name: 'Model X',
        tagline: 'Starting at $89,420',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/ModelX.jpeg'),
    }, {
        id: 4,
        name: 'Model Y',
        tagline: 'Starting at $99,420',
        taglineCTA: 'Touchless Delivery',
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


    const api = useMemo(() => ({
        cars, onToggleIsSelected
    }), [
        cars, onToggleIsSelected
    ]);
    return <CarsContext.Provider value={api}>
        {props.children}
    </CarsContext.Provider>
}



export const useCarsContext = () => useContext(CarsContext);