import DAL_Category from '../DAL/category'
export const state = () => ({
    category: {
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
        }
    }
})
export const mutations = {
    setCategory(state, data) {
        state.category.list[data.lang] = data.body
        state.category.total[data.lang] = data.total
    },
    setCurrentPost(state, data) {
        state.category.currentPage = data
    },
    changeStateCurrentPost(state, data) {
        state.category.currentPage[data.key] = data.value
    },
    setDeleteCurrentPost(state, data) {
        state.category.confirmDelete = data
    },
    setPaginationPage(state, data) {
        state.category.page[data.lang] = data.page
    }

}
export const actions = {
    async setCategory({commit}, data) {
        const result = await DAL_Category.getCategory(data)
        if(result.data.confirm === 'ok') commit('setCategory', result.data)
    },
    async setCurrentPost({commit}, data) {
        const result = await DAL_Category.getCategoryById(data)
        if(result.data.confirm === 'ok')  commit('setCurrentPost', result.data.body)
    },
    changeStateCurrentPost({commit}, data) {
        commit('changeStateCurrentPost', data)
    },
    async setPaginationPage({commit}, data) {
        const result = await DAL_Category.getCategory(data)
        const pageData = {
            lang: data.lang === 1 ? 'ru' : 'ua',
            page: data.offset/data.limit + 1
        }
        if(result.data.confirm === 'ok') {
            commit('setCategory', result.data)
            commit('setPaginationPage', pageData)
        } 
    },
    async updateCurrentPost({commit}, data) {
        const result = await DAL_Category.updateCategory(data)
    }
}
export const getters = {
    getCategory(state){
        return state.category.list
    },
    getCurrentCategory(state) {
      return state.category.currentPage
    },
    getPage(state) {
        return state.category.page
    },
    getTotal(state) {
        return state.category.total
    }
}