import axios from "axios";

export const projectApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL  || 'https://api.devature.dev/api/v1',
    withCredentials: true,
});