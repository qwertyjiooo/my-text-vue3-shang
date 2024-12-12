import serve from '../axios'

export const get = async (url, params) => {
    try {
        const res = await serve.get(url, { params });
        return res;
    } catch (error) {
        console.error('get error', error);
        throw error;
    }
};

export const post = async (url, params) => {
    try {
        const res = await serve.post(url, params);
        return res;
    } catch (error) {
        console.error('post error', error);
        throw error;
    }
}