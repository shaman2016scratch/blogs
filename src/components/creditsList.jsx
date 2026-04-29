import { newMessage } from './utils/message.jsx'

const CreditsComponent = ({list, type, isList, labelText, labelId}) => {
    const GetMan = ({data}) => {
        return (
            <li><b>{data.name}</b> <i>{data.role}</i></li>
        )
    }
    const typeUl = type === 'ul'
    const isLabel = labelText || labelId
    const isTextLabel = labelText === true
    const Label = () => {
        return (
            <div>
                {isTextLabel ? (
                    <h2>{labelText}</h2>
                ) : (
                    <div>
                        {newMessage({
                            id: labelId
                        })}
                    </div>
                )}
            </div>
        )
    }
    return (
        <div>
            {isLabel ? (
                <Label />
            ) : null}
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
