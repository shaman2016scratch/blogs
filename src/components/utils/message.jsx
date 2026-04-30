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

const customMessage = (data, params) => {
    let lang = 'ru'
    if (!params.language) {
        lang = localStorage.getItem('blogs8787-language')
    } else {
        lang = params.language
    }
    let message = 'Error in get element'
    if (messages[params.id]) {
        message = data[params.id].value({
            lang,
            data: params.data
        })
    } 
    return message
}

const genMessage = ({params, paramsM}) => {
    return (
        <div class={params.class} id={params.id}>{newMessage(paramsM)}</div>
    )
}

const Message = ({data, id}) => {
    return (
        <div>
            {newMessage({
                id,
                data
            })}
        </div>
    )
}

const Warn = ({data, id}) => {
    return (
        <div>
            {newWarn({
                id,
                data
            })}
        </div>
    )
}

export { newMessage, newWarn, customMessage, genMessage, Message, Warn }
