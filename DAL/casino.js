import axios from 'axios'
import config from './config';
class DAL_Casino {
    static getPosts(data) {
        return axios.post(config.API_URL + 'admin/casino', data)
    }
    static getPostById(data) {
        return axios.post(config.API_URL + `admin/casino/${data.url}`, data)
    }
    static updatePost(data) {
        return axios.post(config.API_URL + `admin/casino/update`, data)
    }
    static add(data) {
        return axios.post(config.API_URL + `admin/casino/store`, data)
    }
    static delete(data) {
        return axios.post(config.API_URL + `admin/casino/delete`, data)
    }
}
export default DAL_Casino