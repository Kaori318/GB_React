import '../App.css'

export const Message = ({author, text}) => {
  return(
    <div className="messageList-list">
    <h3>Author:  {author}</h3>
    <p>Text: {text}</p>
    </div>
    )
}