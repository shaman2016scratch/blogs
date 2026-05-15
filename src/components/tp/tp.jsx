import { newMessage, Message, LinkFromMessage } from '../utils/message.jsx'
import { metadata } from '../../lib/metadata.js'
import { genPath } from '../../lib/genUrl.js'
import { isLogin } from '../../lib/session.js'

const TopPanel = () => {
    const LoginTPComponent = () => {
        return (
            <>
                <LinkFromMessage id={'tp.login'} url={genPath('login')} />
                <LinkFromMessage id={'tp.join'} url={genPath('join')} />
            </>
        )
    }
    const UserMenuComponent = () => {
        return (
            <>[Image] [username]</>
        )
    }
	return (
		<div class="top-panel">
            <a href={genPath('')}>
                {metadata.zaname}
            </a>
            <a href={genPath('about')}>
                {newMessage({
                    id: 'footer.about.text'
                })}
            </a>
            <a href={genPath('credits')}>
                {newMessage({
                    id: 'footer.credits.text'
                })}
            </a>
            {isLogin ? (
                <LoginTPComponent />
            ) : (
                <UserMenuComponent />
            )}
        </div>
	);
};

export default TopPanel;