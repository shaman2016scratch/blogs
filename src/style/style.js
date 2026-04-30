import theme1 from '../css/main.css?url'
import theme2 from '../css/main2.css?url'

let styles = {
    warn: {
        color: '#fff100'
    },
    news: {
        color: {
            theme1: '#087221',
            theme2: '#07ff41'
        }
    },
    themes: {
        theme1,
        theme2
    }
}

function updThemes() {
    styles.themes = {
        theme1,
        theme2
    }
}

export { styles, updThemes }