import {projectApi} from "../../../util/axios.js";
import {useSignup} from "../Context/UseSignup.jsx";

export const useSignupThreeValidation = () => {
    const { data } = useSignup();

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
        getCaptchaInfo,
    }
};

export default useSignupThreeValidation;