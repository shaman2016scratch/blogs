import { news } from "../../lib/news.js";
import NewsComponent from "../../components/news/news.jsx";

const NewsPage = () => {
    return (
        <>
            <h1>News</h1>
            <NewsComponent newsData={news} />
        </>
    )
}

export default NewsPage