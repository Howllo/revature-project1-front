import {Box, Card} from "@mui/material";
import UserAvatar from "../AvatarComponent/UserAvatar.jsx";
import PostText from "./PostText.jsx";
import PostInformationText from "./PostInformationText.jsx";
import InteractionBar from "./InteractionBar.jsx";
import PropTypes from 'prop-types';
import PostMediaContent from "./PostMediaContent.jsx";

const PostContainer = ({post}) => {
    return (
        <Card
            elevation={0}
            sx={{
                mt: '-1px',
                borderRadius: '0px',
                display: 'flex',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'rgb(212, 219, 226)',
                width: '90%',
                padding: '13px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    height: '100%',
                    paddingRight: '8px',
                }}
            >
                <UserAvatar username={post.username} image={post.profile_pic} />
            </Box>

            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        maxHeight: '20%',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <PostInformationText display_name={post.displayName} username={post.username} post_date={post.post_at}/>
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'left',
                        alignItems: 'left',
                    }}
                >
                    <PostText comment={post.comment}/>
                </Box>

                <Box
                    sx={{
                        maxHeight: '600px',
                        maxWidth: '600px',
                    }}
                >
                    {post.media ? <PostMediaContent media={post.media}/> : null}
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <InteractionBar likesNum={post.likesNum} commentsNum={post.commentsNum}/>
                </Box>
            </Box>
        </Card>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        username: PropTypes.string.isRequired,
        profile_pic: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        post_at: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        commentsNum: PropTypes.number.isRequired,
        likesNum: PropTypes.number.isRequired,
        media: PropTypes.string,
    }).isRequired,
};

export default PostContainer;