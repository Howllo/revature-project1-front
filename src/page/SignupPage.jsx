import {projectApi} from "../util/axios.js";
import SignUpPresentation from "../component/SignUpComponent/Common/SignUp.presentation.jsx";

export function SignupPage() {

    const handleSubmit = async (data) => {
        await projectApi.post("/api/v1/register", data)
            .then((res => {
                res
            }))
    }

    return (
        <SignUpPresentation onSubmit={handleSubmit}/>
    )
}