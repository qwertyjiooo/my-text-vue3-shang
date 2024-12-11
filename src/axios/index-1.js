// // 引入axios
// import axios from "axios";
// import store from "../store";

// // 创建axios实例
// const service = axios.create({
//   baseURL: store.state.originUrl,
// });

// // 请求拦截器
// service.interceptors.request.use(
//   (config) => {
//     // 在发送请求之前做些什么
//     config.headers["AUTHORIZATION"] = sessionStorage.getItem("token") || "";
//     return config;
//   },
//   (error) => {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

// // 响应拦截器
// service.interceptors.response.use(
//   (response) => {
//     // 对响应数据做点什么
//     if (response.status !== 200) return Promise.reject(response.data);
//     return response.data;
//   },
//   (error) => {
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   }
// );

// export const get = async (url, data) => {
//   try {
//     const res = await service.get(url, { params: data });
//     return res;
//   } catch (error) {
//     console.error("GET请求失败", error);
//     throw error;
//   }
// };

// export const post = (url, data) => {
//   try {
//     const res = service.post(url, data);
//     return res;
//   } catch (error) {
//     console.error("POST请求失败", error);
//     throw error;
//   }
// };
