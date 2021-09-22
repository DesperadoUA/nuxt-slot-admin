import axios from 'axios'
import config from './config'
const POST_TYPE = 'seo'
class DAL {
    static getPosts(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}`, data)
    }
    static updatePost(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/update`, data)
    }
    static getPostTypes(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/post-types`, data)
    }
    static update(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/update`, data)
    }
    static filters(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/filters`, data)
    }
}
export default DAL