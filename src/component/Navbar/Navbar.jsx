import {useAuth} from "../../util/auth/AuthProvider.jsx";
import {UnauthContainer} from "../AuthContainer/UnauthContainer.jsx";
import AuthContainer from "../AuthContainer/AuthContainer.jsx";

export const Navbar = () => {
    const { user } = useAuth();

    if(user === null) return (
        <UnauthContainer/>
    )

    return (
        <AuthContainer/>
    )
}