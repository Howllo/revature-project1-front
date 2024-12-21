import {Box, Grid2, Typography} from "@mui/material";
import '@fontsource/inter/800.css';
import StepOneSignUp from "../StepOne/StepOneSignUp.jsx";
import {useSignup} from "../Context/UseSignup.jsx";
import StepTwoSignup from "../StepTwo/StepTwoSignup.jsx";
import StepThreeSignup from "../StepThree/StepThreeSignup.jsx";

const SignUpPresentation = () => {
    const { step } = useSignup();

    const handleDisplay = () => {
        if (step === 1) {
            return <StepOneSignUp/>
        } if (step === 2) {
            return <StepTwoSignup/>
        } if (step === 3) {
            return <StepThreeSignup/>
        } else {
            return null;
        }
    }

    return (
        <Grid2
            id="layout-grid-top"
            container
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'grid',
                gridTemplateColumns: '3fr 5fr',
                backgroundColor: 'white',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    paddingRight: '40px',
                    backgroundColor: 'rgb(241,243,245)',
                }}
            >
                <Typography
                    variant="h3"
                    fontFamily="Inter, sans-serif"
                    sx={{
                        fontSize: '45px',
                        fontWeight: 800,
                        color: 'primary.main'
                    }}
                >
                    Create Account
                </Typography>
                <Typography
                    variant="h3"
                    fontFamily="SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
                    sx={{
                        fontSize: '17px',
                        fontWeight: 600,
                        color: 'black',
                        marginTop: '10px',
                    }}
                >
                    We are glad to have you here!
                </Typography>
            </Box>
                { handleDisplay() }
        </Grid2>
    )
}

export default SignUpPresentation;