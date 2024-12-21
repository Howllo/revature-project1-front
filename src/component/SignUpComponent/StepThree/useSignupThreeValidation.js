import {projectApi} from "../../../util/axios.js";
import {useSignup} from "../Context/UseSignup.jsx";

export const useSignupThreeValidation = () => {
    const { data } = useSignup();
    const { step, setStep } = useSignup();

    const handleNav = async () => {
        const result = await handleSubmitRegister();
        if(result) {
            setStep(step + 1);
        }
    }

    const handleSubmitRegister = async () => {
        if(data.email === "" || data.password === "" || data.username === "" || data.birthdate === ""){
            return false;
        }

        try {
            const response = await projectApi.post("/auth/register",
                {
                    email: data.email,
                    username: data.username,
                    password: data.password,
                    birthdate: data.birthdate,
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            console.log(`The Status Was: ${response.status}`);
            return response.status === 200;
        } catch (error) {
            console.log(`Status Error: ${error.status}`);
            return false;
        }
    }

    const getCaptchaInfo = async () => {
        if(data.captchaToken === "" || data.captchaToken === null || data.captchaToken === undefined){
            return false;
        }

        try{
            const response = await projectApi.post("/auth/verify-captcha",
                {token: data.captchaToken},
                {headers: {
                        'Content-Type': 'application/json',
                    }
                });
            return response.status === 200;
        } catch (e) {
            if(e.response.status === 403 || e.response.status === 500){
                console.log(e.response.status);
            }
            return false;
        }
    }

    return {
        handleNav,
        getCaptchaInfo,
        handleSubmitRegister
    }
};

export default useSignupThreeValidation;