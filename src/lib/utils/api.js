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

async function getNameByUserBlogs(user) {
    return blogs8787api.info.getName.user(user)
}

async function getNameByBlog(blog) {
    return blogs8787api.info.getName.blog(blog)
}

export { getAuthCode, loginBlogs, joinBlogs }
