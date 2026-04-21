import { newMessage, genMessage, customMessage } from '../utils/message.jsx'

const BLOG = (id, name, author) => {
  return (
    <div class='blogInList'>
      <h3>{name}</h3>
      {newMessage({
        id: 'blogList.blog.by'
      })}<b>{author}</b>
      <p class='description'>Description</p>
      <a href='/blogs/blog?id={id}'><button>Open</button></a>
    </div>
  )
}

export default BLOG
