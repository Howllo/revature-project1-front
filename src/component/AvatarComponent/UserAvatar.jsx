import {Avatar, Box, Link} from "@mui/material";

import PropTypes from "prop-types";

const UserAvatar = ({username, image}) => {
    return (
        <Box>
            <Link to={"/" + username}>
                <Avatar alt={name} src={image}
                        sx={{
                            borderColor: 'rgb(212,217,225)',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                        }}
                />
            </Link>
        </Box>
    )
}

UserAvatar.propTypes = {
    username: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default UserAvatar;