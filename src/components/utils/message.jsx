import { messages } from "../../lib/messages.js"

const message = async (params) => {
    let lang = 'ru'
    if (!params.language) {
        lang = localStorage.getItem('blogs8787-language')
    } else {
        lang = params.language
    }
    return await messages[params.id].value({
        lang,
        data: params.data
    })
}

export default message
