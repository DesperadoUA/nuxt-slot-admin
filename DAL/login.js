import axios from 'axios'
import config from './config';
class DAL_Login {
    static checkLogin(login, password) {
        return axios.post(config.API_URL+'login', 
        {
            login, 
            password,  
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            }
        })
    }
    static deleteSessionBySessionId(session) {
        return axios.post(config.API_URL+'logout', {session})
    }
}
export default DAL_Login