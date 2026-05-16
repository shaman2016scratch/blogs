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
            <Search />
            <a href={genPath('news')}>
                {newMessage({
                    id: 'footer.news.text',
                    data: {
                        default: 'Новости'
                    }
                })}
            </a>
            <ProfileComponent />
        </div>
	);
};

export default TopPanel;