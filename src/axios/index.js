import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";

const baseURL = import.meta.env.VITE_API_URL;
const serve = axios.create({
    baseURL: baseURL,
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
        if (response) {
            // if (response.status === 200) {
            ElMessage.success('成功');
            return response.data;
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回登录页面
                    ElMessage.error('登录失效，请重新登录');
                    router.push('/login');
                    break;
                case 403:
                    // 返回403页面
                    ElMessage.error('没有权限，请联系管理员');
                    break;
                case 404:
                    // 返回404页面
                    ElMessage.error('请求的资源不存在');
                    break;
                default:
                    // 返回错误页面
                    ElMessage.error('未知错误');
                    break;
            }
        } else if (error.request) {
            ElMessage.error('网络请求失败，请检查网络连接');
        } else {
            ElMessage.error(error);
        }
        return Promise.reject(error)
    }
)
export default serve