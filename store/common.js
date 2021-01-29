export const state = () => ({
    error: null
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
        }
}