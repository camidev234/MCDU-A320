import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const BaseContext = createContext();

export const BaseContextProvider = ({children}) => {

    const [ newSession, setNewSession ] = useState(true);
    const [aircratType, setAircraftType] = useState("");
    const [actualPage, setActualPage] = useState(0);

    const selectAircraft = (type) => {
        setAircraftType(type);
        setNewSession(false);
    };

    const changePage = (page) => {
        setActualPage(parseInt(page));
    };

    return (
        <BaseContext.Provider value={{
            aircratType,
            selectAircraft,
            modalIsVisible: newSession,
            actualPage,
            changePage,
        }}>
            {children}
        </BaseContext.Provider>
    )
}

BaseContextProvider.propTypes = {
    children: PropTypes.node
}