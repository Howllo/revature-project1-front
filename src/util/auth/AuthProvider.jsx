import {createContext, useState} from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const value = {
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;