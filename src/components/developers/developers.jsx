import developers from '../../lib/developers.js'
import { CreditsComponent } from '../creditsList.jsx'

const Developers = () => {
    return (
        <div>
            <CreditsComponent list={developers} type={'ul'} isList={true} />
        </div>
    )
}

export default Developers