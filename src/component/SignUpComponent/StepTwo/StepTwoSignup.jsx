import {Box, Typography} from "@mui/material";
import {SignUpBackNext} from "../Common/SignUpBackNext.jsx";
import {SignUpUsername} from "./SignUpUsername.jsx";
import {useState} from "react";
import UsernameField from "./UsernameField.jsx";

export default function StepTwoSignup() {
    const [username, setUsername] = useState("");
    const yourName = "Your username is @" + username;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingLeft: '60px',

            }}
        >
            <Box
                sx={{
                    marginRight: '200px'
                }}
            >
                <Typography
                    variant="h5"
                    fontFamily="Arial"
                    sx={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: 'rgb(102,102,102)'
                    }}
                >
                    Step 2 of 3
                </Typography>

                <Typography
                    variant="h4"
                    fontFamily="Arial"
                    sx={{
                        fontSize: '20px',
                        lineHeight: 'bold',
                        fontWeight: 800,
                        color: 'black'
                    }}
                >
                    Choose a username
                </Typography>

                <UsernameField username={username} yourName={yourName} setUsername={setUsername}/>

                <SignUpUsername username={username}/>

                <SignUpBackNext/>
            </Box>
        </Box>
    )
}