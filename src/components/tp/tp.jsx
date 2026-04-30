import { newMessage, Message } from '../utils/message.jsx'
import { metadata } from '../../lib/metadata.js'
import { genPath } from '../../lib/genUrl.js'
import { isLogin } from '../../lib/session.js'

const TopPanel = () => {
    const UserComponent = () => {
        const LoginTPComponent = () => {
            return (
                <div>
                    <a href={genPath('login')}><Message id={'tp.login'} /></a>
                    <a href={genPath('join')}><Message id={'tp.join'} /></a>
                </div>
            )
        }
        const UserMenuComponent = () => {
            return (
                <div></div>
            )
        }
        return (
            <div>
                {isLogin ? (
                    <LoginTPComponent />
                ) : (
                    <UserMenuComponent />
                )}
            </div>
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
            <UserComponent />
        </div>
	);
};

export default TopPanel;