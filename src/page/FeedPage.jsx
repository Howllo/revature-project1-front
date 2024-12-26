import PostContainer from "../component/Post/DisplayPost/PostContainer.jsx";
import {Box} from "@mui/material";
import {usePost} from "../component/Post/Context/UsePost.jsx";
import {useEffect} from "react";

const FeedPage = () => {
    const { listPostData, getPost } = usePost();

    useEffect(() => {
        getPost();
    }, []);

    return (
        <Box
            sx={{
                maxWidth: "85%",
            }}
        >
            {listPostData?.map((post) => (
                <PostContainer
                    key={post.id}
                    post={post}
                />
            ))}
        </Box>
    )
}

export default FeedPage;