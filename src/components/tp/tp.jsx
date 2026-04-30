import { newMessage, Message } from '../utils/message.jsx'
import { metadata } from '../../lib/metadata.js'
import { genPath } from '../../lib/genUrl.js'

const TopPanel = () => {
    const isLogin = false
    const userComponent = () => {
        const loginComponent = (
            <div></div>
        )
        const userMenuComponent = () => {
            return (
                <div></div>
            )
        }
        return (
            <div>
                {isLogin ? (
                    <loginComponent />
                ) : (
                    <userMenuComponent />
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
        </div>
	);
};

export default TopPanel;