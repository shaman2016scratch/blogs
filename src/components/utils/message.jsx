import { messages } from "../../lib/messages.js"

const message = async (params) => {
    let lang = 'ru'
    if (!params.language) {
        lang = localStorage.getItem('blogs8787-language')
    } else {
        lang = params.language
    }
    let message = 'Error in get element'
    if (messages[params.id]) {
        message = await messages[params.id].value({
            lang,
            data: params.data
        })
    } 
    return message
}

export default message
