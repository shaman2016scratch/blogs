import { newMessage, genMessage, customMessage, Message } from '../utils/message.jsx'
import BLOG from './blogInList.jsx'

const BlogList = ({type, tagType}) => {
    const isInUser = type === 'inUser'
    const isInRecommendations = type === 'inRecommendations'
    return (
        <div class='blogs'>
            {isInUser ? (
                <div></div>
            ) : null}
            {isInRecommendations ? (
                <div>
                    <Message id='Rekomendacii.header' type={tagType || 'div'} />
                </div>
            ) : null}
        </div>
    )
}

export default BlogList
