import DAL from '../DAL/seo'
const POST_TYPE = 'SEO'
const DEFAULT_FILTERS = [
    {
        title: 'all',
        filter: 'create_at',
        desc: true,
        asc: false
    },
    {
        title: 'status',
        filter: 'create_at',
        hide: false,
        public: true
    }
]
const FILTERS_WITH_RATING = [
        ...DEFAULT_FILTERS,
    {
        title: 'rating',
        filter: 'rating',
        desc: true,
        asc: false
    }
]
const DEFAULT_POST_TYPE = ['blog', 'vendor', 'news', 'interview']
const POST_TYPE_WITH_RATING = ['casino', 'bonus', 'slot', 'payment']
export const state = () => ({
    [POST_TYPE]: {
        currentPostType: '',
        listPostType: [],
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
        filters: []
    }
})
export const mutations = {
    setPostTypes(state, data) {
        state[POST_TYPE].listPostType = data
    },
    setCurrentPostType(state, data) {
        state[POST_TYPE].currentPostType = data
    },
    setPosts(state, data){
        state[POST_TYPE].list[data.lang] = data.posts
    },
    setCurrentPage(state, data) {
        state[POST_TYPE].page[data.lang] = data.page
    },
    setFilters(state, data) {
        if(POST_TYPE_WITH_RATING.includes(data)) {
            state[POST_TYPE].filters = FILTERS_WITH_RATING
        } else {
            state[POST_TYPE].filters = DEFAULT_FILTERS
        }
    },
    setDefaultPosts(state) {
        state[POST_TYPE].list = {ru: [], ua: []}
    }
}
export const actions = {
    async setPostTypes({commit}, data) {
        const result = await DAL.getPostTypes(data)
        if(result.data.confirm === 'ok') commit('setPostTypes', result.data.body.post_types)
    },
    async setCurrentPostType({commit}, data) {
        commit('setCurrentPostType', data.postType)
        commit('setFilters', data.postType)
        data.lang = 1
        const resultRu = await DAL.getPosts(data)
        if (resultRu.data.confirm === 'ok') {
            resultRu.data.body.lang = 'ru'
            resultRu.data.body.page = 1
            commit('setPosts', resultRu.data.body)
            commit('setCurrentPage', resultRu.data.body)
        }

        data.lang = 2
        const resultUa = await DAL.getPosts(data)
        if (resultUa.data.confirm === 'ok') {
            resultUa.data.body.lang = 'ua'
            resultRu.data.body.page = 1
            commit('setPosts', resultUa.data.body)
            commit('setCurrentPage', resultUa.data.body)
        }
    },
    async update({commit}, data) {
        const result = await DAL.update(data)
    },
    defaultPosts({commit}) {
        commit('setDefaultPosts', '')
    },
    async filtersUpdate({commit}, data) {
        const result = await DAL.filters(data)
        if(result.data.confirm === 'ok') {
            result.data.body.lang = data.lang === 1 ? 'ru' : 'ua'
            commit('setPosts', result.data.body)
        }
    }

}
export const getters = {
    getPostTypes(state){
        return state[POST_TYPE].listPostType
    },
    getCurrentPostType(state){
        return state[POST_TYPE].currentPostType
    },
    getPosts(state){
        return state[POST_TYPE].list
    },
    getFilters(state) {
        return state[POST_TYPE].filters
    }
}