import { metadata } from './metadata.js'

const genUrl = (url, path) => {
    return `${url}${metadata.path}${path}`
}

const genPath = (path) => {
    return `${metadata.path}${path}`
}

const genUrlNotBlogs = (url, path) => {
    return `${url}/${path}`
}

const genPathNotBlogs = (path) => {
    return `/${path}`
}

const genThisURL = (domain, path) => {
    window.location.href = genUrl(domain, path)
}

export { genUrl, genPath, genUrlNotBlogs, genPathNotBlogs, genThisURL }