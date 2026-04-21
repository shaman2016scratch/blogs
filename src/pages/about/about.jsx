import { newMessage } from '../../components/utils/message.jsx'

const AboutBlogs = () => {
    return (
        <div>
            <h1>{newMessage({
                id: 'aboutPage.header.aboutService'
            })}</h1>
            <p>{newMessage({
                id: 'pages.main.about.main'
            })}</p>
        </div>
    )
}

export default AboutBlogs
