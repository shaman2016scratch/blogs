import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import ThemeManager from './components/setTheme.jsx'
import App from "./App.jsx";
import { newMessage } from "./components/utils/message.jsx";
import { metadata } from "./lib/metadata.js"
import { genPath, genUrl } from './lib/genUrl.js'

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
		<App />
        <ThemeManager />
		<footer>
            <div class="container">
                <p class="footer-text">{newMessage({
                    id: 'footer.desctribution'
                })}</p>
				<p class='footer-text'>© MIT LICENSE</p>
				<p class='footer-text'>
					<a href={genPath('')}>{metadata.name}</a>|
					<a href={genPath('about')}>{newMessage({
                        id: 'footer.about.text'
                    })}</a>
                    <a href={genPath('credits')}>{newMessage({
                        id: 'footer.credits.text'
                    })}</a>
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
					<option value="kwakRu">Квак (ру)</option>
					<option value="kwakEn">Kwak (en)</option>
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