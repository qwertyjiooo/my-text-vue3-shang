import serve from '../axios'

const handleRequest = (requestPromise) => {
    return requestPromise
        .then(res => res)
        .catch(err => {
            throw err;
        });
};

const get = (url, params) => handleRequest(serve.get(url, { params }));

const post = (url, params) => handleRequest(serve.post(url, params));

export { get, post }