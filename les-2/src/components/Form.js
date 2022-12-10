import React from "react"

export const Form = ({data, setData, setMessage}) => {
  const {text, author} = data

  const submitForm = (e) =>{
    e.preventDefault()
    if(text.length > 0) {
      setMessage(prevstate => [...prevstate, {text, author}])
    }
    setData(
      {
        text: '',
        author: '',
      }
    )
  }
  return(
    <form onSubmit={submitForm}>
      <input placeholder='Имя' value={author} onChange = {(e)=> setData(prevstate => ({...prevstate,author: e.target.value}))}/>
      <input placeholder='Текст' value={text} onChange = {(e)=> setData(prevstate => ({...prevstate,text: e.target.value}))}/>
      <button type="submit">Отправить</button>
    </form>)
}