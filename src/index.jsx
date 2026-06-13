import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import ThemeManager from './components/setTheme.jsx'
import App from "./App.jsx";
import TopPanel from "./components/tp/tp.jsx";
import { newMessage, LinkFromMessage, Message } from "./components/utils/message.jsx";
import { metadata } from "./lib/metadata.js"
import { genPath, genUrl, genThisURL } from './lib/genUrl.js'
import { styles } from "./style/style.js";

if (!localStorage.getItem('blogs8787-language')) {
	localStorage.setItem('blogs8787-language', 'ru')
}
if (!localStorage.getItem('blogs8787-theme')) {
	localStorage.setItem('blogs8787-theme', 'theme1')
}

function updLang() {localStorage.setItem('blogs8787-language', document.getElementById('languageUser').value)}
function updTheme() {localStorage.setItem('blogs8787-theme', document.getElementById('themeFooter').value)}

createRoot(document.getElementById("root")).render(
	<StrictMode>
        <ThemeManager />
        <TopPanel />
		<App />
		<footer>
            <div class="container">
                <p class="footer-text">{newMessage({
                    id: 'footer.desctribution'
                })}</p>
				<p class='footer-text'>© MIT LICENSE</p>
				<p class='footer-text'>
					<div class={styles.class.link} onClick={() => {genThisURL(metadata.domain, 'a')}}>
                        {metadata.zaname}
                    </div> 
                    <div class={styles.class.link} onClick={() => {genThisURL(metadata.domain, 'about')}}>
                        <Message
                            id='footer.about.text'
                        />
                    </div>
                    <div class={styles.class.link} onClick={() => {genThisURL(metadata.domain, 'credits')}}>
                        <Message
                            id='footer.credits.text'
                        />
                    </div>
				</p>
				<p class="footer-text">{newMessage({
                    id: 'footer.version'
                })}</p>
				<label for="languageUser">{newMessage({
                    id: 'footer.language'
                })}</label>
				<select id='languageUser'>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
					<option value="kwakRu">Квак</option>
					<option value="kwakEn">Kwak</option>
                </select><button onClick={() => updLang()}>{newMessage({
                    id: 'footer.languageSet.button.text'
                })}</button>
                <br /><label for='themeFooter'>{newMessage({
                    id: 'footer.theme.label'
                })}</label>
                <select id='themeFooter'>
                    <option value="theme1">{newMessage({
                        id: 'footer.theme.option1'
                    })}</option>
                    <option value="theme2">{newMessage({
                        id: 'footer.theme.option2'
                    })}</option>
                </select><button onClick={() => updTheme()}>{newMessage({
                    id: 'footer.theme.setButton.text'
                })}</button>
				<p class="footer-text"><i>{newMessage({
                    id: 'footer.langCreated'
                })}</i></p>
            </div>
        </footer>
	</StrictMode>
);