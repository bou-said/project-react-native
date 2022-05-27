import React, {createContext, useContext, useMemo, useState} from 'react';



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
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/Model3.jpeg'),
    }, {
        id: 3,
        name: 'Model X',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/ModelX.jpeg'),
    }, {
        id: 4,
        name: 'Model Y',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/ModelY.jpeg'),
    },
];




export function CarsProvider(props) {
    const [cars] = useState(INITIAL_DATA);



    const api = useMemo(() => ({
        cars
    }), [
        cars
    ]);
    return <CarsContext.Provider value={api}>
        {props.children}
    </CarsContext.Provider>
}



export const useCarsContext = () => useContext(CarsContext);