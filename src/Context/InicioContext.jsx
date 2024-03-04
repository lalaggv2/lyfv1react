import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product';


export const InicioContext = createContext(null);

const InicioContextProvider = (props) => {

    const contextValue = {all_product};

    return (
        <InicioContext.Provider value = {contextValue}>
            {props.children}
        </InicioContext.Provider>
    )
}

export default InicioContextProvider;