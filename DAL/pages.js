import axios from 'axios'
const API_URL = 'http://nuxt-slot-admin/admin/app/category.php'
class DAL_Category {
    static getCategory(data) {
        return axios.post(API_URL, data)
    }
    static deleteCategory(data) {
        return axios.post(API_URL, data)
    }
    static addCategory(data) {
        return axios.post(API_URL, data)
    }
    static updateCategory(data) {
        return axios.post(API_URL, data)
    }
}
export default DAL_Category