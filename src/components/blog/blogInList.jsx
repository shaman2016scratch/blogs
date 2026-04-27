import { newMessage, genMessage, customMessage } from '../utils/message.jsx'

const BLOG = (id, name, author) => {
  return (
    <div class='blogInList'>
      <h3>{name}</h3>
      {newMessage({
        id: 'blogList.blog.by'
      })}<b>{author}</b>
      <p class='description'>{newMessage({
        id: 'placeholder.description.text'
      })}</p>
      <a href='/blogs/blog?id={id}'><button>{newMessage({
        id: 'open.text'
      })}</button></a>
    </div>
  )
}

export default BLOG
