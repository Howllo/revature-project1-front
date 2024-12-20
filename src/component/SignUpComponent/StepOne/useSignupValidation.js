import { useState, useEffect } from 'react';
import { RequirementsEmail, RequirementsPassword } from '../../../util/RequirementsAccount.js';

export const useSignupValidation = (formData) => {
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });
    const [touched, setTouched] = useState({
        email: false,
        password: false,
    });
    const [errorStatus, setErrorStatus] = useState('');

    useEffect(() => {
        if (touched.email) {
            setErrors(prev => ({
                ...prev,
                email: RequirementsEmail(formData.email)
            }));
        }
        if (touched.password) {
            setErrors(prev => ({
                ...prev,
                password: RequirementsPassword(formData.password)
            }));
        }
    }, [formData, touched]);

    const handleBlur = (field) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));
    };

    const validateAll = () => {
        const allTouched = {
            email: true,
            password: true,
        };
        setTouched(allTouched);

        const validEmail = RequirementsEmail(formData.email);
        const validPassword = RequirementsPassword(formData.password);

        if (!validEmail) {
            setErrorStatus('EMAIL');
        } else if (!validPassword) {
            setErrorStatus('PASSWORD');
        } else if (!formData.birthdate) {
            setErrorStatus('BIRTHDATE');
        } else {
            setErrorStatus('');
        }

        return validEmail && validPassword && formData.birthdate;
    };

    return {
        errors,
        touched,
        errorStatus,
        handleBlur,
        validateAll,
    };
};

export default useSignupValidation;