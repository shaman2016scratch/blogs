import { newMessage, genMessage, customMessage } from '../utils/message.jsx'

const BLOG = (id, name, author) => {
  return (
    <div class='blogInList'>
      <h3>{name}</h3>
      {newMessage({
        id: 'blogList.blog.by'
      })} <b>{author}</b>
    </div>
  )
}
