import {Box, Button, Grid2, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import '@fontsource/inter/800.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {DatePicker} from "@mui/x-date-pickers";
import {HorizontalRule, HorizontalSplit} from "@mui/icons-material";
import {Link} from "react-router-dom";

const SignUpPresentation = () => {
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
                    We are glad to have you here!
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
                <Box
                    sx={{
                        marginRight: '200px'
                    }}
                >
                    <Typography
                        variant="h5"
                        fontFamily="Helvetica"
                        sx={{
                            fontSize: '12px',
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
                                color: 'rgb(66, 87, 108)'
                            }}
                        >
                            Email
                        </Typography>

                        <OutlinedInput
                            required
                            type="email"
                            id="outlined-required"
                            placeholder="Enter your email address"
                            variant="outlined"
                            sx={{
                                maxWidth: '450px',
                                marginTop: '10px',
                                width: '100%',
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
                                marginTop: '10px',
                                fontSize: '15px',
                                fontWeight: 600,
                                color: 'rgb(66, 87, 108)'
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
                                maxWidth: '450px',
                                marginTop: '10px',
                                width: 'calc(100% - 40px)',
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
                                marginTop: '10px',
                                fontSize: '15px',
                                fontWeight: 600,
                                color: 'rgb(66, 87, 108)'
                            }}
                        >Your birth date</Typography>

                        <DatePicker
                            format="YYYY/MM/DD"
                            sx={{
                                maxWidth: '450px',
                                marginTop: '10px',
                                width: 'calc(100% - 40px)',
                                marginBottom: '20px',
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            flexDirection: 'row',
                            display: 'flex',
                            marginTop: '-3px',
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontFamily="Arial"
                            sx={{
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'rgb(66, 87, 108)'
                            }}
                        >
                            By creating an account, you agree to our
                        </Typography>
                        <Link to=''>
                            <Typography
                                variant="h4"
                                fontFamily="Arial"
                                sx={{
                                    textDecoration: 'underline',
                                    marginLeft: '3px',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: 'rgb(25, 118, 210)'
                                }}
                            >
                                Terms of Service
                            </Typography>
                        </Link>

                        <Typography
                            variant="h4"
                            fontFamily="Arial"
                            sx={{
                                marginLeft: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'rgb(66, 87, 108)'
                            }}
                        >
                            and
                        </Typography>

                        <Link to=''>
                            <Typography
                                variant="h4"
                                fontFamily="Arial"
                                sx={{
                                    textDecoration: 'underline',
                                    marginLeft: '3px',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: 'rgb(25, 118, 210)'
                                }}
                            >
                                Privacy Policy
                            </Typography>
                        </Link>
                        <Typography
                            variant="h4"
                            fontFamily="Arial"
                            sx={{
                                marginLeft: '1px',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'rgb(56,155,253)'
                            }}
                        >
                            .
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            maxWidth: '450px',
                            marginTop: '40px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgb(212,217,225)',
                                color: 'rgb(66, 87, 108)',
                                fontWeight: 600,
                                textTransform: 'capitalize',
                            }}
                            >
                            Back
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgb(56,155,253)',
                                color: 'white',
                                fontWeight: 600,
                                textTransform: 'capitalize',
                            }}
                        >
                            Next
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            marginTop: '10px',
                            maxWidth: '450px',
                        }}
                    >
                        <HorizontalRule
                            sx={{
                                color: 'rgb(212,217,225)',
                                width: '100%',
                                height: '1px',
                                backgroundColor: 'rgb(212,217,225)',
                            }}
                        />
                    </Box>
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