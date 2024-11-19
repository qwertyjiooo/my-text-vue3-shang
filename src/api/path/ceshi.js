import { get, post } from '../request'

const ceShiPost = {
    ceShi: (params) => get ('/api/users', params),
    ceShi1: (params) => post ('/api/users', params),
    // login: (params) => post ('/chaoxingqiu/account/login/', params),
}
export default ceShiPost