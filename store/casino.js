import DAL_Casino from '../DAL/casino'
export const state = () => ({
    casino: {
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
        newPost: {},
        insert_id: '',
        confirmDelete: false,
    }
})
export const mutations = {
    setCasino(state, data) {
        state.casino.list[data.lang] = data.body
        state.casino.total[data.lang] = data.total
    },
    setCurrentPost(state, data) {
        state.casino.currentPage = data
    },
    changeStateCurrentPost(state, data) {
        state.casino.currentPage[data.key] = data.value
    },
    changeStateNewPost(state, data) {
        state.casino.newPost[data.key] = data.value
    },
    setNewPost(state, data) {
        state.casino.newPost = data
    },
    setInsert(state, data) {
        state.casino.insert_id = data
    },
    setDeleteCurrentPost(state, data) {
        state.casino.confirmDelete = data
    },
    setPaginationPage(state, data) {
        state.casino.page[data.lang] = data.page
    }

}
export const actions = {
    async setCasino({commit}, data) {
        const result = await DAL_Casino.getPosts(data)
        if(result.data.confirm === 'ok') commit('setCasino', result.data)
    },
    async setCurrentPost({commit}, data) {
        const result = await DAL_Casino.getPostById(data)
        if(result.data.confirm === 'ok')  commit('setCurrentPost', result.data.body)
    },
    changeStateCurrentPost({commit}, data) {
        commit('changeStateCurrentPost', data)
    },
    changeStateNewPost({commit}, data) {
        commit('changeStateNewPost', data)
    },
    setNewPost({commit}, data) {
        commit('setNewPost', data)
    },
    async setPaginationPage({commit}, data) {
        const result = await DAL_Casino.getPosts(data)
        const pageData = {
            lang: data.lang === 1 ? 'ru' : 'ua',
            page: data.offset/data.limit + 1
        }
        if(result.data.confirm === 'ok') {
            commit('setCasino', result.data)
            commit('setPaginationPage', pageData)
        } 
    },
    async updateCurrentPost({commit}, data) {
        const result = await DAL_Casino.updatePost(data)
    },
    async addNewPost({commit}, data) {
        const result = await DAL_Casino.add(data)
        if(result.data.confirm === 'ok') {
            commit('setInsert', result.data.insert_id)
        }
    },
    async deleteCurrentPost({commit}, data) {
        const result = await DAL_Casino.delete(data)
        if(result.data.confirm === 'ok') {
            commit('setDeleteCurrentPost', true)
        }
    }
}
export const getters = {
    getCasino(state){
        return state.casino.list
    },
    getCurrentCasino(state) {
      return state.casino.currentPage
    },
    getNewPost(state) {
        return state.casino.newPost
    },
    getInsertId(state) {
        return state.casino.insert_id
    },
    getConfirmDelete(state) {
        return state.casino.confirmDelete
    },
    getPage(state) {
        return state.casino.page
    },
    getTotal(state) {
        return state.casino.total
    }
}