import './App.css';
import React, {useState, useEffect} from 'react'
import {Form} from './components/Form'
import { Message } from './components/Message';

function App() {

  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: '',
  })

  const ROBOT_MESSAGE = 'Сообщение получено'

  useEffect(() => {
    if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(()=>{
        setMessageList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author: 'robot'}])
      }, 1000)
    }
  },[messageList])

  return (
    <div className="App">
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div className='messageList'>
        {
          messageList.map((e,i)=><Message text={e.text} author={e.author} key={i}></Message>)
        }
      </div> 
    </div>
  );
}

export default App;
