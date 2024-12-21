import {Box, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import PropTypes from 'prop-types';

export const UsernameField = ({username, yourName, setUsername}) => {
    return (
        <Box
            sx={{
                marginTop: '30px',
            }}
        >
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
        </Box>
    )
}

UsernameField.propTypes = {
    username: PropTypes.string.isRequired,
    yourName: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
};

export default UsernameField;