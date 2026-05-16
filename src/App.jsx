import { useEffect, useState } from "react";
import { newMessage, Message, ErrorFromMessage } from "./components/utils/message.jsx";
import { newsInMainPage } from "./lib/news.js";
import Authors from "./components/authors/authors.jsx";
import Developers from "./components/developers/developers.jsx";
import AboutBlogs from "./pages/about/about.jsx";
import BlogList from "./components/blog/blogList.jsx";
import CreditsBlogs from './pages/credits/credits.jsx'
import LoginPage from "./pages/login/login.jsx";
import JoinPage from "./pages/join/join.jsx";
import NewsComponent from "./components/news/news.jsx";
import NewsPage from "./pages/news/news.jsx";

const App = () => {
	const page = window.location.pathname.split("/blogs")[1]
	if (page === "/" || page === "/index.html" || page === "/index") {
		document.getElementById("title").textContent = newMessage({
            id: 'title.text'
        })
	    return (
            <div>
			    <h1>Blogs8787</h1>
				<p>{newMessage({
                    id: 'pages.main.about.main'
                })}</p>
				<h2>{newMessage({
                    id: 'pages.main.authors.header'
                })}</h2>
				<Authors />
				<h2>{newMessage({
                    id: 'pages.main.developers.header'
                })}</h2>
				<Developers />
				<h2><Message id='Rekomendacii.header' /></h2>
				<BlogList type='inRecommendations' />
				<h2>News</h2>
				<NewsComponent newsData={newsInMainPage} />
            </div>
	    );
	} else if (page === "/about.html" || page === "/about") {
		document.getElementById("title").textContent = newMessage({
            id: 'about.title.text'
        })
		return <AboutBlogs />
	} else if (page === "/credits.html" || page === "/credits") {
		document.getElementById("title").textContent = newMessage({
            id: 'credits.title.text'
        })
		return <CreditsBlogs />
	} else if (page === "/login.html" || page === "/login") {
		document.getElementById("title").textContent = newMessage({
            id: 'login.pageTitle'
        })
		return <LoginPage />
	} else if (page === "/join.html" || page === "/join") {
		document.getElementById("title").textContent = newMessage({
            id: 'join.pageTitle'
        })
		return <JoinPage />
	} else if (page === "/news.html" || page === "/news") {
		return <NewsPage />
	} else {
		document.getElementById("title").textContent = newMessage({
            id: 'error.pageInDev.title.text'
        })
        return (
			<div>
			    <h1>Blogs8787</h1>
                <ErrorFromMessage id='error.pageInDev.text1' />
            </div>
	    );
    }
};

export default App;
