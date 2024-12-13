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