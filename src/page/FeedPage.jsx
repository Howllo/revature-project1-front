import PostContainer from "../component/Post/PostContainer.jsx";
import {Box} from "@mui/material";

const FeedPage = () => {
    return (
        <Box>
            <PostContainer post={{id: 1, username: 'TestPost', comment: 'Test Content', media: `https://picsum.photos/seed/4/600/600`, displayName: 'Test Author', date: 'Test Date', likesNum: 23, commentsNum: 2, profile_pic: 'https://picsum.photos/seed/2/200/300', post_at: '2024-12-21 08:42:37'}}/>
            <PostContainer post={{id: 2, username: 'TestPost', comment: 'Test Content', media: 'https://www.youtube.com/watch?v=v7pH5y-cHBc', displayName: 'Test Author', date: 'Test Date', likesNum: 2300, commentsNum: 230, profile_pic: 'https://picsum.photos/5/200/300', post_at: '2024-12-15 08:42:37'}}/>
            <PostContainer post={{id: 3, username: 'TestPost', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute consequat ut.', media: 'https://picsum.photos/seed/1/600/600', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-09-15 08:42:37'}}/>
            <PostContainer post={{id: 4, username: 'TestPost', comment: 'Test Content', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-07-15 08:42:37'}}/>
            <PostContainer post={{id: 5, username: 'TestPost', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute consequat ut.', media: '', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-01-15 08:42:37'}}/>
            <PostContainer post={{id: 6, username: 'TestPost', comment: 'Test Content', media: '', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/256/300', post_at: '2024-03-15 08:42:37'}}/>
            <PostContainer post={{id: 7, username: 'TestPost', comment: 'Test Break', media: 'http://localhost:8080/files/videos/break-beat-bark.mp4', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/seed/74/200/300', post_at: '2024-10-15 08:42:37'}}/>
            <PostContainer post={{id: 8, username: 'TestPost', comment: 'Test Snail', media: 'http://localhost:8080/files/videos/snail.mp4', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/seed/12/200/300', post_at: '2024-11-15 08:42:37'}}/>
            <PostContainer post={{id: 9, username: 'TestPost', comment: 'Test Content', media: '', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-02-15 08:42:37'}}/>
            <PostContainer post={{id: 10, username: 'TestPost', comment: 'Test Content', media: '', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-02-15 08:42:37'}}/>
            <PostContainer post={{id: 11, username: 'TestPost', comment: 'Test Content', media: 'http://localhost:8080/files/videos/flowers.mp4', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-02-15 08:42:37'}}/>
            <PostContainer post={{id: 12, username: 'TestPost', comment: 'Test Content', media: '', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/seed/2/200/300', post_at: '2024-02-15 08:42:37'}}/>
            <PostContainer post={{id: 13, username: 'TestPost', comment: 'Test Content', media: 'http://localhost:8080/files/videos/ocean.mp4', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-02-15 08:42:37'}}/>
            <PostContainer post={{id: 14, username: 'TestPost', comment: 'Test Content', media: '', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-02-15 08:42:37'}}/>
            <PostContainer post={{id: 15, username: 'TestPost', comment: 'Test Content', media: 'https://picsum.photos/seed/22/600/600', displayName: 'Test Author', date: 'Test Date', likesNum: 0, commentsNum: 0, profile_pic: 'https://picsum.photos/200/300', post_at: '2024-02-15 08:42:37'}}/>
        </Box>
    )
}

export default FeedPage;