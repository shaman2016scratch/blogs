import { newMessage, genMessage, customMessage, Message } from '../utils/message.jsx'
import BLOG from './blogInList.jsx'

const BlogList = ({type}) => {
  const isInUser = type === 'inUser'
  const isRekomendacii = type === 'rekomendacii'
  return (
    <div class='blogs'>
      {isInUser ? (
        <div></div>
      ) : null}
      {isInRekomendacii ? (
        <div>
          <Message id='Rekomendacii.header' />
        </div>
      ) : null}
    </div>
  )
}

export default BlogList
