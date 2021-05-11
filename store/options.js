import DAL_Options from '../DAL/options'
export const state = () => ({
    options: {
        currentPage: {},
        list: []
    }
})
export const mutations = {
    setPages(state, data) {
        state.options.list = data.body
    },
    setCurrentPage(state, data) {
        state.options.currentPage = data
    },
    changeStateCurrentPage(state, data) {
        state.options.currentPage[data.key] = data.value
    },
    
}
export const actions = {
    async setPages({commit}, data) {
        const result = await DAL_Options.getPages(data)
        if(result.data.confirm === 'ok') commit('setPages', result.data)
    },
    async setCurrentPage({commit}, data) {
        const result = await DAL_Options.getPageById(data)
        if(result.data.confirm === 'ok')  commit('setCurrentPage', result.data.body)
    },
    changeStateCurrentPage({commit}, data){
        commit('changeStateCurrentPage', data)
    },
    async updateCurrentPage({commit}, data) {
        const result = await DAL_Options.updatePage(data)
    }
}
export const getters = {
    getPages(state){
        return state.options.list
    },
    getCurrentPage(state) {
      return state.options.currentPage
    }
}