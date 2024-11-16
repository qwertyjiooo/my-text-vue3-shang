import axios from "axios";

const serve = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 5000,
})

serve.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

serve.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)
export default serve