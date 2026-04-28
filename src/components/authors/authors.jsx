import authors from '../../lib/authors.js'
import { CreditsComponent } from '../creditsList.jsx'

const Authors = () => {
    return (
        <div>
            <CreditsComponent list={authors} type={'ul'} isList={true} />
        </div>
    )
}

export default Authors