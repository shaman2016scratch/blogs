import { styles } from "./style.js";
import { Warn } from "../components/utils/message.jsx";

const formatedWarn = ({id}) => {
    const styleWarn = `color: ${styles.warn.color}`
    return (
        <div style={styleWarn}>
            <Warn id={id} />
        </div>
    )
}

const formatedNews = ({theme, text}) => {
    const styleNews = `color: ${styles.news.color[theme]}`
    return (
        <div style={styleNews}>{text}</div>
    )
}

export { formatedWarn, formatedNews }