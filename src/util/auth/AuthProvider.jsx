import {createContext, useContext, useState} from "react";
import PropTypes from 'prop-types';


const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export {useAuth};