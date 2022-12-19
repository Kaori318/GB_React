import React from "react";
import '../App.css';
import IButton from '@mui/material/Button';



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
    <form className="form" onSubmit={submitForm}>
      <input className="form-input {
" placeholder='Имя' value={author} onChange = {(e)=> setData(prevstate => ({...prevstate,author: e.target.value}))}/>
      <input className="form-input {
" placeholder='Текст' value={text} onChange = {(e)=> setData(prevstate => ({...prevstate,text: e.target.value}))}/>
 <IButton variant="contained"  type="submit">Отправить</IButton>
    </form>)
}