import axios from 'axios'
const API_URL = 'http://nuxt-slot-admin/admin/app/'
class DAL_Login {
    static checkLogin(login, password) {
        return axios.post(API_URL+'auth.php', {login, password})
    }
    static deleteSessionBySessionId(session) {
        return axios.post(API_URL+'logout.php', {session})
    }
}
export default DAL_Login