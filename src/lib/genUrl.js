import { metadata } from './metadata.js'

const genUrl = (url, path) => {
    return `${url}${metadata.path}${path}`
}

const genPath = (path) => {
    return `${metadata.path}${path}`
}

export { genUrl, genPath }