import DAL_Category from '../DAL/category'
export const state = () => ({
    category: [],
})
export const mutations = {
    setCategory(state, data) {
        state.category = data
    },
    addCategory(state, data) {
        state.category.push(data)
    },
    updateCategory(state, data) {
        const newState = []
        state.category.forEach(item => {
            const obj = {...item}
            if(item.id === data.id) obj.category_name = data.category_name
            newState.push(obj)
        })
        state.category = newState
    },
    deleteCategory(state, data) {
        const newState = state.category.filter(item => item.id !== data.id)
        state.category = newState
    }
}
export const actions = {
    async setCategory({commit}, data){
        const result = await DAL_Category.getCategory(data)
        if(result.data.confirm === 'ok') commit('setCategory', result.data.list)
    },
    async addCategory({commit}, data){
        const result = await DAL_Category.addCategory(data)
        const obj = {
            id: result.data.insertId,
            lang: data.lang,
            category_name: data.categoryName,
            post_type: data.post_type
        }
        commit('addCategory', obj)
    },
    async updateCategory({commit}, data){
        await DAL_Category.updateCategory(data)
        commit('updateCategory', data)
    },
    async deleteCategory({commit}, data){
        await DAL_Category.deleteCategory(data)
        commit('deleteCategory', data)
    }
}
export const getters = {
    getCategory(state) {
        return state.category
    },
}