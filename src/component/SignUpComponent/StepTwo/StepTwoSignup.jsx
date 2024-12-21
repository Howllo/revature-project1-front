import {Box, Typography} from "@mui/material";
import {SignUpBackNext} from "../Common/SignUpBackNext.jsx";
import {useEffect, useState} from "react";
import UsernameField from "./UsernameField.jsx";
import SignupUsernamePresent from "./SignupUsernamePresent.jsx";
import {useSignup} from "../Context/UseSignup.jsx";
import {data} from "react-router-dom";
import useSignUpTwoValidation from "./useSignUpTwoValidation.js";

export default function StepTwoSignup() {
    const { setData, step, setStep } = useSignup();
    const { validateAll } = useSignUpTwoValidation();
    const [username, setUsername] = useState("");
    const yourName = "Your username is @" + username;

    const handleNav = async () => {
        const isValid = await validateAll();

        if (isValid) {
            setData({
                ...data,
                username: username
            })
            setStep(step + 1);
        }
    }

    useEffect(() => {
        setData({
            ...data,
            username: username
        })
    }, [username, setData]);

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

                { username.length > 0 ? <SignupUsernamePresent username={username}/> : null }

                <SignUpBackNext handleNav={handleNav}/>
            </Box>
        </Box>
    )
}