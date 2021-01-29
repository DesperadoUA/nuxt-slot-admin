import axios from 'axios'
const API_URL = 'http://nuxt-slot-admin/admin/app/pages.php'
class DAL_Pages {
    static getPages(data) {
        return axios.post(API_URL, data)
    }
    static updatePage(data) {
        return axios.post(API_URL, data)
    }
}
export default DAL_Pages