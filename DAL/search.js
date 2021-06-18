import axios from 'axios'
import config from './config'
class DAL {
    static getPosts(data) {
        return axios.post(config.API_URL + `admin/search`, data)
    }
}
export default DAL