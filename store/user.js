import DAL_Login from '../DAL/login'
export const state = () => ({
    user: {
        id: '',
        role: '',
        login: false,
        session: ''
    }
})
export const mutations = {
    setUser(state, payload) {
        state.user.id = payload.id
        state.user.role = payload.role
        state.user.login = payload.login
        state.user.session = payload.session
    }
}
export const actions = {
    setUser({commit}, payload) {
        localStorage.setItem('currentUser', JSON.stringify(payload))
        commit('setUser', payload)
    },
    async logout({commit}, payload){
        const result = await DAL_Login.logout(payload)
        localStorage.removeItem('currentUser')
        if(result.data.confirm === 'ok') {
            const defaultObj = {
                id: '',
                role: '',
                login: false,
                session: ''
            }
            commit('setUser', defaultObj)
        }
    },
    async checkUser({commit}, payload){
        const result = await DAL_Login.checkUser(payload)
        return result.data.confirm
    }
}
export const getters = {
    getUser(state){
        return state.user
    }
}