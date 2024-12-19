import * as React from "react";
import axios from "axios";
import {projectApi} from "../util/axios.js";
import SignUpPresentation from "../component/AuthContainer/SignUp.presentation.jsx";

export function SignupPage() {
    const handleSubmit = async (data) => {
        await axios.post(projectApi + "/api/v1/register", data)
            .then((res => {
                res
            }))
    }

    return (
        <SignUpPresentation
            onChange={handleSubmit}
        />
    )
}