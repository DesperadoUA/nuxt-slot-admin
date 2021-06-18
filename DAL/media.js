import axios from 'axios'
import config from './config'
class DAL {
    static getAllImg(data) {
        return axios.post(config.API_URL + `admin/media`, data)
    }
    static deleteImg(data) {
        return axios.post(config.API_URL + `admin/delete-media`, data)
    }
}
export default DAL