import { messages } from "../../lib/messages.js"

const message = async (params) => {
    let lang = localStorage.getItem('blogs8787-language')
    return await messages[params.id].value({
        lang,
        data: params.data
    })
}

export { message }