import axios from 'axios'
import config from './config';
class DAL_Category {
    static getCategory(data) {
        return axios.post(config.API_URL + 'admin/category', data)
    }
    static getCategoryById(data) {
        return axios.post(config.API_URL + `admin/category/${data.url}`, data)
    }
    static deleteCategory(data) {
        return axios.post(config.API_URL + 'admin/category/delete', data)
    }
    static updateCategory(data) {
        return axios.post(config.API_URL + 'admin/category/update', data)
    }
}
export default DAL_Category