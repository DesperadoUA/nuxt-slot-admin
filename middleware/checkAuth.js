export default async function ({store, redirect}) {
    const user = store.getters['user/getUser']
    if(!user.login) {
        const currentUser = localStorage.getItem('currentUser')
        if(currentUser) {
           const confirm = await store.dispatch('user/checkUser', JSON.parse(currentUser))
            if(confirm === 'ok'){
                store.dispatch('user/setUser', JSON.parse(currentUser))
            }
            else redirect('/')
        }
        else redirect('/')
    }
}