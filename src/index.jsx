import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import message from "./components/utils/message.jsx";

if (!localStorage.getItem('blogs8787-language')) {
	localStorage.setItem('blogs8787-language', 'ru')
}

function updLang() {localStorage.setItem('blogs8787-language', document.getElementById('languageUser').value)}

document.getElementById("title").textContent = message({
    id: 'title'
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
					<a href='/BluOf/about.html'>{message({
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
                    <option value="ru" id='langRu'>Русский</option>
                    <option value="en" id='langEn'>English</option>
                </select><button onClick={() => updLang()}>УСТАНОВИТЬ ЯЗЫК/SET LANG</button>
				<p class="footer-text"><i>Данный сервис написан на JavaScript React и JavaScript SHAMAN2016</i></p>
            </div>
        </footer>
	</StrictMode>
);