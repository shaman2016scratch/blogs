import { messages, warns } from "../../lib/messages.js"

const newMessage = (params) => {
    let lang = 'ru'
    if (!params.language) {
        lang = localStorage.getItem('blogs8787-language')
    } else {
        lang = params.language
    }
    let message = 'Error in get element'
    if (messages[params.id]) {
        message = messages[params.id].value({
            lang,
            data: params.data
        })
    } 
    return message
}

const newWarn = (params) => {
    let lang = 'ru'
    if (!params.language) {
        lang = localStorage.getItem('blogs8787-language')
    } else {
        lang = params.language
    }
    let warn = 'Error in get element'
    if (warns[params.id]) {
        warn = warns[params.id].value({
            lang,
            data: params.data
        })
    } 
    return warn
}

export { newMessage, newWarn }