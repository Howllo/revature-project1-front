import { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {projectApi} from "../../../util/axios.js";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
    const [postData, setPostData] = useState({
        file: null,          // Actual file for FormData
        previewUrl: null,    // Preview URL for display
        comment: '',
        isVideo: false
    });

    useEffect(() => {
        return () => {
            if (postData.previewUrl) {
                URL.revokeObjectURL(postData.previewUrl);
            }
        };
    }, [postData.previewUrl]);

    const handleMediaSelect = (file) => {
        if (postData.previewUrl) {
            URL.revokeObjectURL(postData.previewUrl);
        }

        // Check if it's a video file
        const isVideo = file.type.startsWith('video/');

        setPostData(prev => ({
            ...prev,
            file: file,
            previewUrl: file ? URL.createObjectURL(file) : null,
            isVideo: isVideo
        }));
    };

    const setComment = (comment) => {
        setPostData(prev => ({
            ...prev,
            comment
        }));
    };

    const resetPost = () => {
        if (postData.previewUrl) {
            URL.revokeObjectURL(postData.previewUrl);
        }
        setPostData({
            file: null,
            previewUrl: null,
            comment: ''
        });
    };

    const submitPost = async () => {
        const formData = new FormData();
        if (postData.file) {
            formData.append('image', postData.file);
        }
        formData.append('comment', postData.comment);

        try {
            const response = await  projectApi.get('/post/create', {
                method: 'POST',
                body: formData
            });

            if (!response.ok){
                throw new Error('Failed to submit post');
            }

            const result = await response.json();
            resetPost();
            return result;
        } catch (error) {
            console.error('Error submitting post:', error);
            throw error;
        }
    };

    const value = {
        file: postData.file,
        previewUrl: postData.previewUrl,
        comment: postData.comment,
        isVideo: postData.isVideo,
        handleImageSelect: handleMediaSelect,
        setComment,
        submitPost,
        resetPost
    };

    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    );
};

PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default PostContext;