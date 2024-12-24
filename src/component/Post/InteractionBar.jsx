import {Box, Button, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const InteractionBar = ({likesNum, commentsNum}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20%',
                    width: '50%',
                }}
            >
                <Button
                    sx={{
                        borderRadius: '20%',
                        alignItems: 'center',
                    }}
                >
                    <ChatBubbleOutlineIcon
                        sx={{
                            color: 'rgb(66, 87, 108)'
                        }}
                    />
                    <Typography
                        variant="body1"
                        fontFamily="Inter, sans-serif"
                        sx={{
                            paddingLeft: '5px',
                            paddingTop: '2px',
                            flexDirection: 'row',
                            fontSize: '13.125px',
                            fontWeight: 400,
                            color: 'rgb(66, 87, 108)'
                        }}
                    >
                        {commentsNum}
                    </Typography>
                </Button>
            </Box>

            <Box
                sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'row',

                }}
            >
                <Button
                    sx={{
                        borderRadius: '20%',
                        alignItems: 'center',
                    }}
                >
                    <FavoriteBorder
                        sx={{
                            color: 'rgb(66, 87, 108)'
                        }}
                    />
                    <Typography
                        variant="h6"
                        fontFamily="Inter, sans-serif"
                        sx={{
                            paddingLeft: '5px',
                            paddingTop: '2px',
                            flexDirection: 'row',
                            fontSize: '13.125px',
                            color: 'rgb(66, 87, 108)'
                        }}
                    >
                        {likesNum}
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

InteractionBar.propTypes = {
    likesNum: PropTypes.number.isRequired,
    commentsNum: PropTypes.number.isRequired,
};

export default InteractionBar;