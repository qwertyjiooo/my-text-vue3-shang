import serve from '../axios'

const handleRequest = (requestPromise) => {
    return requestPromise
        .then(res => res)
        .catch(err => {
            console.error('请求错误', err);
            throw err;
        });
};

const get = (url, params) => handleRequest(serve.get(url, { params }));

const post = (url, params) => handleRequest(serve.post(url, params));

export { get, post }