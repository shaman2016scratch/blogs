import { messages } from "../../lib/messages.js"

const message = (params) => {
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

export default message
