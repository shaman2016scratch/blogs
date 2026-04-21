import { metadata } from './metadata.js'

let messages = {
    'footer.version': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Версия: ${metadata.version}`
            } else if (data.lang === 'en') {
                return `Version: ${metadata.version}`
            }
        }
    },
    'footer.language': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Ваш язык: `
            } else if (data.lang === 'en') {
                return `Your language:`
            }
        }
    },
    'footer.about.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `О сервисе`
            } else if (data.lang === 'en') {
                return `About`
            }
        }
    },
    'footer.desctribution': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `(C) 2026, ${metadata.name} - новая русская платформа для блогов от SHAMAN2016 с открытым исходным кодом!`
            }
        }
    },
    'error.pageInDev.text1': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Эта страница в разработке`
            } else if (data.lang === 'en') {
                return `Page in developent`
            }
        }
    },
    'title.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `${metadata.zaname} - новая платформа для блогов`
            } else if (data.lang === 'en') {
                return `${metadata.zaname} - new plathorm for blogs`
            }
        }
    },
    'footer.langCreated': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Данный сервис написан на JavaScript React и JavaScript SHAMAN2016`
            } else if (data.lang === 'en') {
                return `Service ${metadata.zaname} created in React and JS by SHAMANA2016`
            }
        }
    },
    'footer.languageSet.button.text': {
        value: function(data) {
            return `Set language`
        }
    },
    'pages.main.about.main': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `${metadata.zaname} - это новый сервис для создания блогов. К сожелению его api и он сам ещё в разработке, но сайт частично готов.`
            }
        }
    },
    'blogList.blog.by': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `by `
            }
        }
    },
    'aboutPage.header.aboutService': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `О ${metadata.name}`
            } else if (data.lang === 'en') {
                return `About ${metadata.name}`
            }
        }
    }
}

let warns = {}

const addElement = (type, id, data) => {
    if (type === 'message') {
        messages[id] = data
    } else if (type === 'warn') {
        warns[id] = data
    } else {
        console.error('Type element not found')
    }
}

export { messages, warns, addElement }
