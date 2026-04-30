import { newMessage } from './utils/message.jsx'
import { genUrlNotBlogs } from '../lib/genUrl.js'

const CreditsComponent = ({list, type, isList, labelText, labelId}) => {
    const lang = localStorage.getItem('blogs-language')
    const langIsEn = lang === 'en'
    function userNotInGithub() {
        alert(newMessage({
            id: 'creditsComponent.error.userNotInGithub'
        }))
    }
    const githubLink = ({user}) => {
        const isGithub = user.githubName !== null
        const link = genUrlNotBlogs('https://github.com', user.githubName)
        return (
            <div>
                {isGithub ? (
                    <a href={link}>Github</a>
                ) : (
                    <div onClick={() => userNotInGithub()}>Github</div>
                )}
            </div>
        )
    }
    const GetMan = ({data}) => {
        const isMan = data !== null || data !== undefined
        return (
            <div>
                {isMan ? (
                    <li>
                        <b>{data.name}</b> 
                        <i>{langIsEn ? data.role : data.translateRole[lang]}</i> |
                        <githubLink user={data} />
                    </li>
                ) : (
                    <p>Error: Not found</p>
                )}
            </div>
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
