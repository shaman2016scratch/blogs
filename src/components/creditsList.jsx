import { newMessage } from '../utils/message.jsx'

const CreditsComponent = ({list, type}) => {
    const GetMan = ({data}) => {
        return (
            <li><b>{data.name}</b> <i>{data.role}</i></li>
        )
    }
    const typeUl = type === 'ul'
    return (
        <div>
            {typeUl ? (
                <ul>
                    {list.map((man) => (
                        <GetMan data={man} />
                    ))}
                </ul>
            ) : (
                <ol>
                    {list.map((man) => (
                        <GetMan data={man} />
                    ))}
                </ol>
            )}
        </div>
    )
}

export { CreditsComponent }