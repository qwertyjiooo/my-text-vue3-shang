import { get, post } from '../request'

const ceShiPost = {
    ceShi: (params) => get ('/users', params),
    ceShi1: (params) => post ('/users', params),
}
export default ceShiPost