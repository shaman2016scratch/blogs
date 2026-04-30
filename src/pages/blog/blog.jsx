import { newMessage, Message } from '../../components/utils/message.jsx'
import { CreditsComponent } from '../../components/creditsList.jsx'
import { genPath, genUrlNotBlogs } from '../../lib/genUrl.js'
import { formatedWarn } from '../../style/style.jsx'
import BlogList from '../../components/blog/blogList.jsx'
import blogs8787api from 'blogs8787api.js'

const BlogPage = ({user, isUser}) => {
    const isBlog = !isUser
    const UserPage = () => {
        return (
            <div></div>
        )
    }
    const BlogPage2 = () => {
        return (
            <div></div>
        )
    }
    const Render = () => {
        return (
            <div>
                {isUser ? (
                    <UserPage />
                ) : (
                    <BlogPage2 />
                )}
            </div>
        )
    }
    return (
        <Render />
    )
}

export { BlogPage }