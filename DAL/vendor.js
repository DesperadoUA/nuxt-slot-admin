import axios from 'axios'
import config from './config'
const POST_TYPE = 'vendors'
class DAL {
    static getPosts(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}`, data)
    }
    static getPostById(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/${data.url}`, data)
    }
    static updatePost(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/update`, data)
    }
    static add(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/store`, data)
    }
    static delete(data) {
        return axios.post(config.API_URL + `admin/${POST_TYPE}/delete`, data)
    }
}
export default DAL