import {Box, Grid2, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import '@fontsource/inter/800.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {DatePicker} from "@mui/x-date-pickers";

const SignUpPresentation = () => {
    return (
        <Grid2
            id="layout-grid-top"
            container
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'grid',
                gridTemplateColumns: '2fr 3fr',
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
                        fontSize: '34px',
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
                    We are glad to have you!
                </Typography>
            </Box>
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
                <Typography
                    variant="h5"
                    fontFamily="Helvetica"
                    sx={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: 'rgb(102,102,102)'
                    }}
                >
                    Step 1 of 3
                </Typography>

                <Typography
                    variant="h4"
                    fontFamily="Arial"
                    sx={{
                        fontSize: '20px',
                        fontHeight: 'bold',
                        fontWeight: 800,
                        color: 'black'
                    }}
                >
                    Create Account
                </Typography>

                <Box
                    sx={{
                        marginTop: '40px',
                    }}
                >
                    <Typography
                        variant="h4"
                        fontFamily="Arial"
                        sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'black'
                        }}
                    >
                        Email
                    </Typography>
                    <OutlinedInput
                        required
                        id="outlined-required"
                        placeholder="Enter your email address"
                        variant="outlined"
                        sx={{
                            marginTop: '10px',
                            width: '350px',
                            marginBottom: '20px',
                        }}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon/>
                            </InputAdornment>
                        }
                    />
                </Box>


                <Box>
                    <Typography
                        variant="h4"
                        fontFamily="Arial"
                        sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'black'
                        }}
                    >
                        Password
                    </Typography>

                    <OutlinedInput
                        required
                        type="password"
                        id="outlined-required"
                        placeholder="Enter your password"
                        variant="outlined"
                        sx={{
                            marginTop: '10px',
                            width: '350px',
                            marginBottom: '20px',
                        }}
                        startAdornment={
                            <InputAdornment position="start">
                                <LockIcon/>
                            </InputAdornment>
                        }
                    />
                </Box>

                <Box>
                    <Typography
                        variant="h4"
                        fontFamily="Arial"
                        sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'black'
                        }}
                    >Your birth date</Typography>
                    <DatePicker/>
                </Box>
            </Box>
        </Grid2>
    )
}

SignUpPresentation.propTypes = {
    date: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SignUpPresentation;