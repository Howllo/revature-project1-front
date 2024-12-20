import {Box, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import {SignUpBackNext} from "../Common/SignUpBackNext.jsx";
import {SignUpUsername} from "./SignUpUsername.jsx";
import {useState} from "react";

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

                <OutlinedInput
                    required
                    type="email"
                    id="outlined-required"
                    className={'email'}
                    placeholder="Enter your username"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{
                        maxWidth: '450px',
                        marginTop: '10px',
                        width: '100%',
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <AlternateEmail/>
                        </InputAdornment>
                    }
                />

                <Typography
                    variant="h5"
                    fontFamily=""
                    sx={{
                        marginTop: '10px',
                        fontSize: '15px',
                        fontHeight: 'bold',
                        fontWeight: 600,
                        color: 'rgb(102,102,102)'
                    }}
                >
                    {
                        username !== '' ? yourName : null
                    }
                </Typography>

                <SignUpUsername username={username}/>

                <SignUpBackNext/>
            </Box>
        </Box>
    )
}