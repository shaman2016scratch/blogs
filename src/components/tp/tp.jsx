import { useState } from "react";
import { newMessage, Message } from '../utils/message.jsx'
import { metadata } from '../../lib/metadata.js'
import { genPath } from '../../lib/genUrl.js'

const TopPanel = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
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