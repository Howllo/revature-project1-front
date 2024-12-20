import {createContext, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";

const UseSignup = createContext(null);
export const useSignup = () => useContext(UseSignup);

export const SignUpProvider = ({ children }) => {
    const [data, setData] = useState({
        username: "",
        email: "",
        birthdate: null,
        password: "",
    });
    const [step, setStep] = useState(1);
    const [isUsernameAvailable, setUsernameAvailable] = useState(false);
    const [isEmailValidated, setIsEmailValidated] = useState(false);
    const [isEmailAllowed, setIsEmailAllowed] = useState()
    const [isPasswordValidated, setIsPasswordValidated] = useState();

    // Reset the state.
    const location = useLocation();
    useEffect(() => {
        if(!location.pathname.includes("signup")) {
            setStep(1);
            setData({
                username: "",
                email: "",
                birthdate: null,
                password: "",
            });
            setUsernameAvailable(false);
            setIsEmailValidated(false);
            setIsPasswordValidated(false);

        }
    }, [location]);

    const value = {
        data,
        setData,
        step,
        setStep,
        isEmailValidated,
        setIsEmailValidated,
        isEmailAllowed,
        setIsEmailAllowed,
        isPasswordValidated,
        setIsPasswordValidated,
        isUsernameAvailable,
        setUsernameAvailable
    }

    return (
        <UseSignup.Provider value={value}>
            {children}
        </UseSignup.Provider>
    );
}

SignUpProvider.propTypes = {
    children: PropTypes.node.isRequired,
};