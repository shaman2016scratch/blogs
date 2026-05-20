import { newMessage, Message, LinkFromMessage } from '../utils/message.jsx'
import { metadata } from '../../lib/metadata.js'
import { genPath } from '../../lib/genUrl.js'
import { isLogin } from '../../lib/session.js'
import Search from './search.jsx'

const TopPanel = () => {
    const LoginTPComponent = () => {
        return (
            <>
                <LinkFromMessage id={'tp.login'} href={genPath('login')} />
                <LinkFromMessage id={'tp.join'} href={genPath('join')} />
            </>
        )
    }
    const UserMenuComponent = () => {
        return (
            <>[Image] [username]</>
        )
    }
    const ProfileComponent = () => {
        return (
            <>
                {isLogin ? (
                    <LoginTPComponent />
                ) : (
                    <UserMenuComponent />
                )}
            </>
        )
    }
	return (
		<div class="top-panel">
            
            <a href={genPath('')}>
                {metadata.zaname}
            </a>
            <LinkFromMessage
                id='footer.about.text'
                href={genPath('about')}
            />
            <LinkFromMessage
                id='footer.credits.text'
                href={genPath('credits')}
            />
            <Search />
            <LinkFromMessage
                id='tp.news.text'
                data={{
                    default: 'Новости'
                }}
                href={genPath('news')}
            />
            <ProfileComponent />
        </div>
	);
};

export default TopPanel;