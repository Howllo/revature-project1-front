import {useAuth} from "../../../util/auth/UseAuth.jsx";
import {UnauthContainer} from "../UnauthContainer/UnauthContainer.jsx";
import AuthContainer from "../AuthContainer/AuthContainer.jsx";
import {useEffect, useState} from "react";
import {Box} from "@mui/material";

export const Navbar = () => {
    const { isAuthenticated } = useAuth();
    const [, setForceUpdate] = useState({})

    useEffect(() => {
        setForceUpdate({});
    }, [isAuthenticated]);

    const handleNavDisplay = () => {
        if (isAuthenticated) {
            return <AuthContainer/>
        } else {
            return <UnauthContainer/>
        }
    }

    return (
        <Box>
            {
                handleNavDisplay()
            }
        </Box>
    )
}