import { metadata } from './metadata.js'

let messages = {
    'footer.version': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Версия: ${metadata.version}`
            } else if (data.lang === 'en') {
                return `Version: ${metadata.version}`
            } else if (data.lang === 'kwakRu') {
                return `Кварсия: ${metadata.version}`
            }
        }
    },
    'footer.language': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Ваш язык: `
            } else if (data.lang === 'en') {
                return `Your language: `
            } else if (data.lang === 'kwakRu') {
                return `Ваш квазык: `
            }
        }
    },
    'footer.about.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `О сервисе`
            } else if (data.lang === 'en') {
                return `About`
            } else if (data.lang === 'kwakRu') {
                return `О болоте`
            }
        }
    },
    'footer.desctribution': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `(C) 2026, ${metadata.name} - новая русская платформа для блогов от SHAMAN2016 с открытым исходным кодом!`
            } else if (data.lang === 'kwakRu') {
                return `(C) 2026, БолотныеБлоги - новая болотная платформа для блогов с открытым исходным кодом!`
            }
        }
    },
    'error.pageInDev.text1': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Эта страница в разработке`
            } else if (data.lang === 'en') {
                return `This page in developent`
            } else if (data.lang === 'kwakRu') {
                return `Эта жабица в квазработке`
            }
        }
    },
    'title.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `${metadata.zaname} - новая платформа для блогов`
            } else if (data.lang === 'en') {
                return `${metadata.zaname} - new plathorm for blogs`
            } else if (data.lang === 'kwakRu') {
                return `БотоныеБлоги - новая кватформа для кваков`
            }
        }
    },
    'footer.langCreated': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Данный сервис написан на JavaScript React и JavaScript SHAMAN2016`
            } else if (data.lang === 'en') {
                return `Service ${metadata.zaname} created in React and JS by SHAMANA2016`
            } else if (data.lang === 'kwakRu') {
                return `Данный сервис зажабен на Реактивном ЖабаСкрипте и ЖабаСкрипте`
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
            } else if (data.lang === 'kwakRu') {
                return `БолотныеБлоги - это новый кварвис для создания кваков.`
            }
        }
    },
    'blogList.blog.by': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `by `
            } else if (data.lang === 'kwakRu') {
                return `Жабка автор: `
            }
        }
    },
    'aboutPage.header.aboutService': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `О ${metadata.name}`
            } else if (data.lang === 'en') {
                return `About ${metadata.name}`
            } else if (data.lang === 'kwakRu') {
                return `О болоте`
            }
        }
    },
    'about.title.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `О ${metadata.zaname} - новая платформа для блогов`
            } else if (data.lang === 'en') {
                return `About ${metadata.zaname} - new plathorm for blogs`
            }
        }
    },
    'error.pageInDev.title.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Страница в разработке | ${metadata.name}`
            } else if (data.lang === 'en') {
                return `This page in development | ${metadata.name}`
            }
        }
    },
    'status.blog.label': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Статус блога: ${data.data.status}`
            }
        }
    },
    'status.label': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Статус: ${data.data.status}`
            }
        }
    },
    'placeholder.description.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Описание`
            }
        }
    },
    'open.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Открыть`
            }
        }
    },
    'footer.theme.label': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Тема: `
            } else if (data.lang === 'en') {
                return `Theme: `
            }
        }
    },
    'footer.theme.option1': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Тёмная`
            } else if (data.lang === 'en') {
                return `Dark`
            }
        }
    },
    'footer.theme.option2': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Светлая`
            } else if (data.lang === 'en') {
                return `Light`
            }
        }
    },
    'footer.theme.setButton.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `сменить`
            } else if (data.lang === 'en') {
                return `set`
            }
        }
    },
    'pages.main.authors.header': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Авторы`
            } else if (data.lang === 'en') {
                return `Authors`
            }
        }
    },
    'pages.main.developers.header': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Разработчики`
            } else if (data.lang === 'en') {
                return `Developers`
            }
        }
    },
    'cresitsPage.header.creditsService': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Благодарности Blogs8787`
            } else if (data.lang === 'en') {
                return `Credits Blogs8787`
            }
        }
    },
    'credits.title.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Благодарности Blogs8787`
            } else if (data.lang === 'en') {
                return `Credits Blogs8787`
            }
        }
    },
    'footer.credits.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Благодарности`
            } else if (data.lang === 'en') {
                return `Credits`
            }
        }
    },
    'pages.main.moderators.header': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Модераторы`
            } else if (data.lang === 'en') {
                return `Moderators`
            }
        }
    },
    'Rekomendacii.header': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Рекомендации`
            }
        }
    },
    'creditsComponent.error.userNotInGithub': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `К сожелению, его нет в Github`
            }
        }
    },
    'tp.login': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Войти`
            } else if (data.lang === 'en') {
                return `Log in`
            }
        }
    },
    'tp.join': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Присоеденится к ${metadata.zaname}`
            } else if (data.lang === 'en') {
                return `Join ${metadata.zaname}`
            }
        }
    }
}

let warns = {
    'inDev.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Страница в разработке!`
            } else if (data.lang === 'en') {
                return `This page in development!`
            }
        }
    },
    'podozritelnuyUser.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Данный пользователь помечен как подозрительный`
            }
        }
    },
    'podozritelnuyBlog.text': {
        value: function(data) {
            if (data.lang === 'ru') {
                return `Данный блог помечен как подозрительный`
            }
        }
    }
}

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
