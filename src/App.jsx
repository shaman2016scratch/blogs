import { useEffect, useState } from "react";
import { newMessage } from "./components/utils/message.jsx";
import AboutBlogs from "./pages/about/about.jsx";

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
            </div>
	    );
	} else if (page === "/about.html" || page === "/about") {
		document.getElementById("title").textContent = newMessage({
            id: 'about.title.text'
        })
		return (
			<AboutBlogs />
		)
	} else {
		document.getElementById("title").textContent = newMessage({
            id: 'error.pageInDev.title.text'
        })
        return (
			<div>
			    <h1>Blogs8787</h1>
                <p>{newMessage({
                    id: 'error.pageInDev.text1'
                })}</p>
            </div>
	    );
    }
};

export default App;
