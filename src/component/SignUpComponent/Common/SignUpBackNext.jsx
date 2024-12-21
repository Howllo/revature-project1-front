import {Box, Button, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {HorizontalRule} from "@mui/icons-material";
import SelectLanguage from "../../LanguageChoose/SelectLanguage.jsx";
import {useSignup} from "../Context/UseSignup.jsx";

// eslint-disable-next-line react/prop-types
export function SignUpBackNext({handleNav}) {
    const {step, setStep } = useSignup();
    const navigate = useNavigate();

    const handleBack = () => {
        if(step > 1) {
            setStep(step - 1);
        }

        if(step === 1) {
            navigate('/');
        }
    }

    return (
        <Box>
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
                    onClick={handleBack}
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
                    onClick={handleNav}
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

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: '-10px',
                }}
            >
                <SelectLanguage/>

                <Box
                    sx={{
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h4"
                        fontFamily="Arial"
                        sx={{
                            marginLeft: '1px',
                            fontSize: '12px',
                            fontWeight: 600,
                            maxWidth: '100px',
                            color: 'rgb(66, 87, 108)'
                        }}
                    >
                        Having Trouble?
                    </Typography>
                    <Link to={'/'}>
                        <Typography
                            variant="h4"
                            fontFamily="Arial"
                            sx={{
                                marginLeft: '4px',
                                fontSize: '12px',
                                fontWeight: 600,
                                maxWidth: '100px',
                                color: 'rgb(25, 118, 210)'
                            }}
                        >
                            Contact support
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default SignUpBackNext;