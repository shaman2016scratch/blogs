import { news } from "../../lib/news.js";
import { Message } from "../../components/utils/message.jsx";
import NewsComponent from "../../components/news/news.jsx";

const NewsPage = () => {
    return (
        <>
            <h1><Message id='news.text' /></h1>
            <NewsComponent newsData={news} />
        </>
    )
}

export default NewsPage