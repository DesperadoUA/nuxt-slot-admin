import DAL_Settings from '../DAL/settings'
export const state = () => ({
    settings: {
        currentPage: {},
        list: {
            ru: [],
            ua: []
        }
    }
})
export const mutations = {
    setPages(state, data) {
        state.settings.list[data.lang] = data.body
    },
    setCurrentPage(state, data) {
        state.settings.currentPage = data
    },
    changeStateCurrentPage(state, data) {
        state.settings.currentPage[data.key] = data.value
    }
}
export const actions = {
    async setPages({commit}, data) {
        const result = await DAL_Settings.getPages(data)
        if(result.data.confirm === 'ok') commit('setPages', result.data)
    },
    async setCurrentPage({commit}, data) {
        const result = await DAL_Settings.getPageById(data)
        if(result.data.confirm === 'ok')  commit('setCurrentPage', result.data.body)
    },
    changeStateCurrentPage({commit}, data){
        commit('changeStateCurrentPage', data)
    },
    async updateCurrentPage({commit}, data) {
        const result = await DAL_Settings.updatePage(data)
    }
}
export const getters = {
    getPages(state){
        return state.settings.list
    },
    getCurrentPage(state) {
      return state.settings.currentPage
    }
}