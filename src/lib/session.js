import blogs8787api from 'blogs8787api.js'

let session = localStorage.getItem('blogs8787-session')

function updateSession() {
    session = localStorage.getItem('blogs8787-session')
}

const isLogin = () => {
    updateSession()
    return session !== null || session !== undefined
}

export { session, updateSession, isLogin }