import DAL_Pages from '../DAL/pages'
export const state = () => ({
    pages: {
        currentPage: {},
        list: {
            ru: [],
            ua: []
        },
        page: {
            ru: 1,
            ua: 1
        },
        total: {
            ru: 0,
            ua: 0
        },
    }
})
export const mutations = {
    setPages(state, data) {
        state.pages.list[data.lang] = data.body
        state.pages.total[data.lang] = data.total
    },
    setCurrentPage(state, data) {
        state.pages.currentPage = data
    },
    changeStateCurrentPage(state, data) {
        state.pages.currentPage[data.key] = data.value
    },
    setPaginationPage(state, data) {
        state.pages.page[data.lang] = data.page
    }
}
export const actions = {
    async setPages({commit}, data) {
        const result = await DAL_Pages.getPages(data)
        if(result.data.confirm === 'ok') commit('setPages', result.data)
    },
    async setCurrentPage({commit}, data) {
        const result = await DAL_Pages.getPageById(data)
        if(result.data.confirm === 'ok')  commit('setCurrentPage', result.data.body)
    },
    changeStateCurrentPage({commit}, data){
        commit('changeStateCurrentPage', data)
    },
    async setPaginationPage({commit}, data) {
        const result = await DAL_Pages.getPages(data)
        const pageData = {
            lang: data.lang === 1 ? 'ru' : 'ua',
            page: data.offset/data.limit + 1
        }
        if(result.data.confirm === 'ok') {
            commit('setPages', result.data)
            commit('setPaginationPage', pageData)
        } 
    },
    async updateCurrentPage({commit}, data) {
        const result = await DAL_Pages.updatePage(data)
    }
}
export const getters = {
    getPages(state){
        return state.pages.list
    },
    getCurrentPage(state) {
      return state.pages.currentPage
    },
    getPage(state) {
        return state.pages.page
    },
    getTotal(state) {
        return state.pages.total
    }
}