import axios from 'axios'
import config from './config';
class DAL_Bonuses {
    static getPosts(data) {
        return axios.post(config.API_URL + 'admin/bonuses', data)
    }
    static getPostById(data) {
        return axios.post(config.API_URL + `admin/bonuses/${data.url}`, data)
    }
    static updatePost(data) {
        return axios.post(config.API_URL + `admin/bonuses/update`, data)
    }
    static add(data) {
        return axios.post(config.API_URL + `admin/bonuses/store`, data)
    }
    static delete(data) {
        return axios.post(config.API_URL + `admin/bonuses/delete`, data)
    }
}
export default DAL_Bonuses