import DAL from '../DAL/news'
const POST_TYPE = 'news'
export const state = () => ({
    [POST_TYPE]: {
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
    setPosts(state, data) {
        state[POST_TYPE].list[data.lang] = data.body
        state[POST_TYPE].total[data.lang] = data.total
    },
    setCurrentPost(state, data) {
        state[POST_TYPE].currentPage = data
    },
    changeStateCurrentPost(state, data) {
        state[POST_TYPE].currentPage[data.key] = data.value
    },
    changeStateNewPost(state, data) {
        state[POST_TYPE].newPost[data.key] = data.value
    },
    setNewPost(state, data) {
        state[POST_TYPE].newPost = data
    },
    setInsert(state, data) {
        state[POST_TYPE].insert_id = data
    },
    setDeleteCurrentPost(state, data) {
        state[POST_TYPE].confirmDelete = data
    },
    setPaginationPage(state, data) {
        state[POST_TYPE].page[data.lang] = data.page
    }

}
export const actions = {
    async setPosts({commit}, data) {
        const result = await DAL.getPosts(data)
        if(result.data.confirm === 'ok') commit('setPosts', result.data)
    },
    async setCurrentPost({commit}, data) {
        const result = await DAL.getPostById(data)
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
        const result = await DAL.getPosts(data)
        const pageData = {
            lang: data.lang === 1 ? 'ru' : 'ua',
            page: data.offset/data.limit + 1
        }
        if(result.data.confirm === 'ok') {
            commit('setPosts', result.data)
            commit('setPaginationPage', pageData)
        } 
    },
    async updateCurrentPost({commit}, data) {
        const result = await DAL.updatePost(data)
    },
    async addNewPost({commit}, data) {
        const result = await DAL.add(data)
        if(result.data.confirm === 'ok') {
            commit('setInsert', result.data.insert_id)
        }
    },
    async deleteCurrentPost({commit}, data) {
        const result = await DAL.delete(data)
        if(result.data.confirm === 'ok') {
            commit('setDeleteCurrentPost', true)
        }
    }
}
export const getters = {
    getPosts(state){
        return state[POST_TYPE].list
    },
    getCurrentPost(state) {
      return state[POST_TYPE].currentPage
    },
    getNewPost(state) {
        return state[POST_TYPE].newPost
    },
    getInsertId(state) {
        return state[POST_TYPE].insert_id
    },
    getConfirmDelete(state) {
        return state[POST_TYPE].confirmDelete
    },
    getPage(state) {
        return state[POST_TYPE].page
    },
    getTotal(state) {
        return state[POST_TYPE].total
    }
}