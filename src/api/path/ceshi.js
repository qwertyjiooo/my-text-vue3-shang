import { get, post } from '../request'

const ceShiPost = {
    ceShi: (params) => get ('/users', params),
}
export default ceShiPost