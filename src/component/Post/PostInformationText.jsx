import {Box, Typography} from "@mui/material";
import PropTypes from 'prop-types';

const PostText = ({display_name, username, post_date}) => {
    const daysBetween = () => {
        const date1 = new Date(post_date);
        const today = new Date();

        date1.setUTCHours(0, 0, 0, 0);
        today.setUTCHours(0, 0, 0, 0);

        return Math.floor((today - date1) / (1000 * 60 * 60 * 24));
    };

    return (
        <Box
            sx={{
                width: '100%',
                flexDirection: 'row',
                display: 'flex',
            }}
        >
            <Typography
                variant="h6"
                fontFamily="Inter, sans-serif"
                sx={{
                    flexDirection: 'row',
                    fontSize: '15px',
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    color: 'rgb(11, 15, 20)'
                }}
            >
                {display_name}
            </Typography>

            <Typography
                variant="h6"
                fontFamily="Inter, sans-serif"
                sx={{
                    paddingLeft: '5px',
                    paddingTop: '4px',
                    flexDirection: 'row',
                    fontSize: '12.125px',
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    color: 'rgb(66, 87, 108)'
                }}
            >
                @{username}
            </Typography>

            <Box
                sx={{
                   paddingBottom: '0.5px'
                }}
            >
                <Typography
                    variant="h6"
                    fontFamily="Inter, sans-serif"
                    sx={{
                        paddingLeft: '5px',
                        paddingTop: '2px',
                        flexDirection: 'row',
                        fontSize: '15px',
                        wordWrap: 'break-word',
                        overflow: 'hidden',
                        color: 'rgb(66, 87, 108)'
                    }}
                >
                    ·
                </Typography>
            </Box>

            <Typography
                variant="h6"
                fontFamily="Inter, sans-serif"
                sx={{
                    paddingLeft: '5px',
                    paddingTop: '3px',
                    flexDirection: 'row',
                    fontSize: '13.125px',
                    fontWeight: 600,
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    color: 'rgb(66, 87, 108)'
                }}
            >
                {daysBetween()}d
            </Typography>
        </Box>
    )
}

PostText.propTypes = {
    display_name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    post_date: PropTypes.string.isRequired,
};

export default PostText;