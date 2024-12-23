import {Avatar, Box, Link} from "@mui/material";
import Cookies from "js-cookie";

const AuthContainer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <Link to={"/" + Cookies.get("username")}>
                <Avatar alt={name} src={Cookies.get("profile_pic")}/>
            </Link>
        </Box>
    )
}

export default AuthContainer;