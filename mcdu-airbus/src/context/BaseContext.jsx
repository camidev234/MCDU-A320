import { createContext } from "react";
import PropTypes from 'prop-types';

const BaseContext = createContext();

export const BaseContextProvider = ({children}) => {
    return (
        <BaseContext.Provider>
            {children}
        </BaseContext.Provider>
    )
}

BaseContextProvider.propTypes = {
    children: PropTypes.node
}