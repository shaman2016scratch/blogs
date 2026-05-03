import { newMessage, genMessage, customMessage, Message } from '../utils/message.jsx'
import BLOG from './blogInList.jsx'
import blogs8787api from 'blogs8787api.js'

const BlogList = ({type}) => {
    const isInUser = type === 'inUser'
    const isInRecommendations = type === 'inRecommendations'
    const recomendations = blogs8787api.recomendations().list
    return (
        <div class='blogs'>
            {isInUser ? (
                <div></div>
            ) : null}
            {isInRecommendations ? (
                <div>
                    {recomendations.map((blog) => (
                        <BLOG id={blog.id} name={blog.name} author={blog.author} />
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default BlogList
