import {Avatar, Box, Link} from "@mui/material";
import {useAuth} from "../../util/auth/AuthProvider.jsx";

const AuthContainer = () => {
    const { user } = useAuth();
    return (
        <Box>
            <Link to={"/" + username}>
                <Avatar alt={name} src={sourceUrl}/>
            </Link>
        </Box>
    )
}

export default AuthContainer;