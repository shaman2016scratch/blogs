import blogs8787api from 'blogs8787api.js'

async function getAuthCode() {
    const authCode = await blogs8787api.genAuth()
    return authCode
}

async function loginBlogs(id, scratch) {
    const result = await blogs8787api.accounts.auth.login(scratch, id)
    return result
}

async function joinBlogs() {}

export { getAuthCode, loginBlogs, joinBlogs }
