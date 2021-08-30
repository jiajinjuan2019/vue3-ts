import axios from 'axios'

//配置请求头信息
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建实例
// ----------------------------------------------------跨域接口用这个
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API + '',
    timeout: 6000,
    withCredentials: true,
});
// ----------------------------------------------------基本配置接口用这个
const feach = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_YGHD + '',
    timeout: 6000,
    withCredentials: true,
});
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default { instance, feach }