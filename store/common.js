export const state = () => ({
    error: null,
    lang: {
        1: 'ru',
        2: 'ua'
    }
})
export const mutations = {
    setError(state, payload){
        state.error = payload
    },
    clearError(state){
        state.error = null
    }
}
export const actions = {
    setError({commit}, payload){
        commit('setError', payload)
    },
    clearError({commit}){
        commit('clearError')
    }
}
export const getters = {
    error(state){
      return state.error
    },
    lang(state) {
        return state.lang
    }
}