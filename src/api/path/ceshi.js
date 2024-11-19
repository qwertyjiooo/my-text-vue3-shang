import { get, post } from '../request'

const ceShiPost = {
    ceShi: (params) => get ('/users', params),
    ceShi1: (params) => post ('/users', params),
    // login: (params) => post ('/chaoxingqiu/account/login/', params),
}
export default ceShiPost