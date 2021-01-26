export default function ({store, redirect}) {
    const user = store.getters['user/getUser']
    if(!user.login) redirect('/')
}