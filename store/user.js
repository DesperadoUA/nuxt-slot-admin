export default {
    state:{
        user: {
            id: '',
            role: '',
            login: false,
            session: ''
        },
    },
    mutations:{
        setUser(state, payload) {
            state.user.id = payload.id
            state.user.role = payload.role
            state.user.login = payload.login,
            state.user.session = payload.session
        },
    },
    actions:{
        setUser({commit}, payload){
            commit('setUser', payload)
        }
    },
    getters:{
        getUser(state){
            return state.user
        },
    }
}