import serve from '../axios'

export const get = async (url, params) => {
    try {
        const res = await serve.get(url, { params });
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const post = async (url, params) => {
    try {
        const res = await serve.post(url, params);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
}

// 建议在页面中使用
/**
 * aaaa(data).then(res => {}).catch(err => {})
 */

// export const get = (url, data) => {
//     return serve.get(url, { params: data })
//         .then(res => {
//             return res
//         })
//         .catch(err => {
//             console.log('get 请求失败');
//             throw err
//         })

// }

// export const post = (url, data) => {
//     return serve.post(url, data)
//         .then(res => {
//             return res
//         })
//         .catch(err => {
//             console.log('post 请求失败');
//             throw err
//         })
// }