export const state = () => ({
    error: null,
    lang: {
        1: 'ru',
        2: 'ua'
    },
    loading: false
})
export const mutations = {
    setError(state, payload){
        state.error = payload
    },
    clearError(state){
        state.error = null
    },
    setLoad(state, payload) {
        state.loading = payload
    }
}
export const actions = {
    setError({commit}, payload){
        commit('setError', payload)
    },
    clearError({commit}){
        commit('clearError')
    },
    setLoad({commit}, payload){
        commit('setLoad', payload)
    }
}
export const getters = {
    error(state){
      return state.error
    },
    lang(state) {
        return state.lang
    },
    isLoading(state) {
        return state.loading
    }
}