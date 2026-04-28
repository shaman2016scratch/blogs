import { newMessage } from '../../components/utils/message.jsx'
import { CreditsComponent } from '../../components/creditsList.jsx'
import authors from '../../lib/authors.js'
import developers from '../../lib/developers.js'

const CreditsBlogs = () => {
    return (
        <div>
            <h1>{newMessage({
                id: 'cresitsPage.header.creditsService'
            })}</h1>
            <h2>{newMessage({
                id: 'pages.main.authors.header'
            })}</h2>
			<CreditsComponent list={authors} type={'ul'} />
			<h2>{newMessage({
                id: 'pages.main.developers.header'
            })}</h2>
			<CreditsComponent list={developers} type={'ul'} isList={true} />
        </div>
    )
}

export default CreditsBlogs