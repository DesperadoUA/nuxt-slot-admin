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
    static logout(id) {
        return axios.post(config.API_URL+'logout', id)
    }
    static checkUser(data) {
        return axios.post(config.API_URL+'check-user', data)
    }
}
export default DAL_Login