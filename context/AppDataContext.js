import React, { createContext, useState } from "react";
import { CREATE } from "../nav/MainStackNavigation";


export const AppDataContext = createContext();

export const AppDataProvider = ({children}) => {


    const [itin, setItin] = useState({
        initalbudget: 0,
        transportation_fees: 0,
        feeding_fees: 0,
        initial_date: '',
        end_date: '',
        country: '',
        city: '',
        recomended_places: '',
        aditional_comments: '',
    })

    const gotoCreate = (navigation) => {
        navigation.push(CREATE);
    }
    


    return (
        <AppDataContext.Provider value={{
            itin,
            setItin,
            gotoCreate,
        }}>
            {children}
        </AppDataContext.Provider>
    )
}