import { newMessage } from '../../components/utils/message.jsx'

const AboutBlogs = () => {
    return (
        <h1>{newMessage({
            id: 'aboutPage.header.aboutService'
        })}</h1>
        <p>{newMessage({
            id: 'pages.main.about.main'
        })}</p>
    )
}

export default AboutBlogs
