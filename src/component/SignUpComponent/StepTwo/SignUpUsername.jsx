import {projectApi} from "../../../util/axios.js";
import SignupUsernamePresent from "./SignupUsernamePresent.jsx";
import PropTypes from 'prop-types';

export function SignUpUsername({ username }) {
    const checkUsername = async () => {
        try {
            const response = await projectApi.get(`/users/check/username/${username}`);
            return response.status === 200;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    return (
        <>
            { username.length > 0 ? <SignupUsernamePresent username={username}/> : null }
        </>
    )
}

SignUpUsername.propTypes = {
    username: PropTypes.string.isRequired,
};