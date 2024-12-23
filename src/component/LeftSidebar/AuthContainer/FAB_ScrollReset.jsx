import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {Box, Fab} from "@mui/material";

const FAB_ScrollReset = () => {
    return (
        <Box
            sx={{
                paddingRight: '20px',
                width: '100%',
                height: '95%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginBottom: '50px'
            }}
        >
            <Fab elevation={0}
                sx={{
                    backgroundColor: 'rgb(255,255,255)',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: 'transparent'
                    },
                    '&:active': {
                        backgroundColor: 'transparent'
                    },
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'rgb(195,205,215)',
                    '@keyframes disappear': {
                        '0%': {
                            opacity: 1,
                        },
                        '100%': {
                            opacity: 0,
                        },
                    }

                }}
            >
                <ExpandLessIcon
                    sx={{
                        color: 'black',
                        fontSize: 30,
                    }}
                />
            </Fab>
        </Box>
    )
}

export default FAB_ScrollReset;