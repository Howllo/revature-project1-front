﻿import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import {Box, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const SignUpWarning = ({warningType}) => {
    const [updateText, setUpdateText] = useState()
    
    const getWarningMessage = (input) => {
        const message = {
            'EMAIL': "Your email appear not to be valid.",
            'PASSWORD': 'Password does not meet requirements.',
            'BIRTHDATE': 'Birthdate does not meet requirements.',
            default: 'Invalid input provided'
        };
        return message[input]
    }

    useEffect(() => {
        setUpdateText(getWarningMessage(warningType));
    }, [warningType]);

    return (
        <Box
            sx={{
                flexDirection: 'row',
                display: 'flex',
                borderRadius: '7px',
                padding: '10px',
                backgroundColor: 'rgb(255,114,114)',
                maxWidth: '430px',
            }}
        >
        <WarningAmberRoundedIcon
            size={18}
            sx={{
                color: 'white',
                fontSize: '20px',
                maxWidth: '20px',
            }}
        />

        <Typography
            variant="h5"
            fontFamily=""
            sx={{
                maxWidth: '300px',
                marginTop: '1px',
                marginLeft: '5px',
                fontSize: '15px',
                fontHeight: 'bold',
                color: 'white',
                fontWeight: 600,
            }}
        >
            {updateText}
        </Typography>
        </Box>
    )
}

SignUpWarning.propTypes = {
    warningType: PropTypes.string.isRequired,
};

export default SignUpWarning;