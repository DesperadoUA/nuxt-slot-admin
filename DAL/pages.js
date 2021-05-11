import axios from 'axios'
import config from './config';
class DAL_Pages {
    static getPages(data) {
        return axios.post(config.API_URL + 'admin/pages', data)
    }
    static getPageById(data) {
        return axios.post(config.API_URL + `admin/pages/${data.url}`, data)
    }
    static updatePage(data) {
        return axios.post(config.API_URL + `admin/pages/update`, data)
    }
}
export default DAL_Pages