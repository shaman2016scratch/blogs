import { useEffect, useState } from "react";
import message from "./components/utils/message.jsx";

const App = () => {
	const page = window.location.pathname.split("/blogs")[1]
	if (page === "/" || page === "/index.html" || page === "/index") {
	    return (
            <div>
			    <h1>Blogs8787</h1>
				<p>{message({
                    id: 'pages.main.about.main'
                })}</p>
            </div>
	    );
	} else {
        return (
			<div>
			    <h1>Blogs8787</h1>
                <p>{message({
                    id: 'error.pageInDev.text1'
                })}</p>
            </div>
	    );
    }
};

export default App;
