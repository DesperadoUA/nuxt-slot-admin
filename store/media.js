import DAL_Media from '../DAL/media'
export const state = () => ({
    media: {
        list: []
    }
})
export const mutations = {
    setMedia(state, data) {
        state.media.list = data.body
    },
    addMedia(state, data) {
        state.media.list.unshift(data.value)
    },
    deleteMedia(state, data) {
        const result = state.media.list.filter(item => item !== data.file)
        state.media.list = result
    }
}
export const actions = {
    async setMedia({commit}, data) {
        const result = await DAL_Media.getAllImg(data)
        if(result.data.confirm === 'ok') commit('setMedia', result.data)
    },
    addMedia({commit}, data) {
        commit('addMedia', data)
    },
    async deleteMedia({commit}, data){
        const result = await DAL_Media.deleteImg(data)
        if(result.data.confirm === 'ok') commit('deleteMedia', data)
    }
}
export const getters = {
    getMedia(state){
        return state.media.list
    }
}