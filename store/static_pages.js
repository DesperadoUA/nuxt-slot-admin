import DAL_Pages from '../DAL/pages'
export const state = () => ({
    pages: {
        currentPage: {},
        list: []
    }
})
export const mutations = {
    setPages(state, data) {
        state.pages.list = data
    }
}
export const actions = {
    async setPages({commit}, data){
        const result = await DAL_Pages.getPages(data)
        console.log(result.data.confirm)
        if(result.data.confirm === 'ok') commit('setPages', result.data.list)
    },
}
export const getters = {
    getPages(state){
        return state.pages.list
    },
    getCurrentPage(state) {
      return state.pages.currentPage
    }
}