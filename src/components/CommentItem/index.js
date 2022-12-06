import './index.css'

const CommentItems = props => {
  const {items, key, dell, toggleIsStarred} = props
  const {title, comment, isStarred, id} = items
  const change = () => {
    toggleIsStarred(id)
  }
  const fun = () => {
    dell(key)
  }

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li type="none">
      <p>{title[0]}</p>
      <p>{title}</p>
      <p>{comment}</p>
      <p>less than a minute ago</p>
      <button type="button" onClick={change}>
        Like
      </button>
      <img src={starImgUrl} alt="like" />

      <button type="button" onClick={fun} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default CommentItems
