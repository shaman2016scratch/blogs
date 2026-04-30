import { Message } from '../../components/utils/message.jsx'
import { CreditsComponent } from '../../components/creditsList.jsx'
import authors from '../../lib/authors.js'
import developers from '../../lib/developers.js'
import moderators from '../../lib/moderators.js'

const CreditsBlogs = () => {
    return (
        <div>
            <h1><Message id='cresitsPage.header.creditsService' /></h1>
			<CreditsComponent list={authors} type={'ul'} labelId={'pages.main.authors.header'} />
			<CreditsComponent list={developers} type={'ul'} isList={true} labelId={'pages.main.developers.header'} />
			<CreditsComponent list={moderators} type={'ul'} isList={true} labelId={'pages.credits.moderators.header'} />
        </div>
    )
}

export default CreditsBlogs