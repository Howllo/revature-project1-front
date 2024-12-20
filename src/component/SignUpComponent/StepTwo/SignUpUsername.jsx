import {projectApi} from "../../../util/axios.js";
import {useEffect} from "react";
import SignupUsernamePresent from "./SignupUsernamePresent.jsx";
import PropTypes from 'prop-types';

export function SignUpUsername({ username }) {
    useEffect(() => {
        projectApi.get('/check/', ).then(res => {
            console.log(res);
        })
    })

    return (
        <>
            { username.length > 0 ? <SignupUsernamePresent username={username}/> : null }
        </>
    )
}

SignUpUsername.propTypes = {
    username: PropTypes.string.isRequired,
};