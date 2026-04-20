import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './main.css'
import App from "./App.jsx";
import message from "./components/utils/message.jsx";

if (!localStorage.getItem('blogs8787-language')) {
	localStorage.setItem('blogs8787-language', 'ru')
}

function updLang() {localStorage.setItem('blogs8787-language', document.getElementById('languageUser').value)}

document.getElementById("title").textContent = message({
    id: 'title.text'
})

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<footer>
            <div class="container">
                <p class="footer-text">{message({
                    id: 'footer.desctribution'
                })}</p>
				<p class='footer-text'>© MIT LICENSE</p>
				<p class='footer-text'>
					<a href='/blogs/about.html'>{message({
                        id: 'footer.about.text'
                    })}</a>
				</p>
				<p class="footer-text">{message({
                    id: 'footer.version'
                })}</p>
				<label for="languageUser">{message({
                    id: 'footer.language'
                })}</label>
				<select id='languageUser'>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select><button onClick={() => updLang()}>{message({
                    id: 'footer.languageSet.button.text'
                })}</button>
				<p class="footer-text"><i>{message({
                    id: 'footer.langCreated'
                })}</i></p>
            </div>
        </footer>
	</StrictMode>
);
