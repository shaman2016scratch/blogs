import { metadata } from './metadata.js'

let messages = {
    'footer.version': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Версия: ${metadata.version}`
            }
        }
    },
    'footer.language': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Ваш язык: `
            }
        }
    },
    'footer.about.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `О сервисе`
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
            }
        }
    },
    'title.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `${metadata.zaname} - новая платформа для блогов`
            }
        }
    },
    'footer.langCreated': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Данный сервис написан на JavaScript React и JavaScript SHAMAN2016`
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
            return `${metadata.zaname} - это новый сервис для создания ботов. К сожелению его api и он сам ещё в разработке, но сайт частично готов.`
        }
    }
}

export { messages }
