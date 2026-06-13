import { Message } from "../utils/message.jsx"

const Search = () => {
    return (
        <>
            <input id='searchZapros' /><button><Message
                id='tp.search.button'
                data={{
                    default: 'Искать'
                }}
            /></button>
        </>
    )
}

export default Search