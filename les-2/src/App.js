import React, {useState, useEffect} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from './style'
import InteractiveList from './components/Chat'
import {Form} from './components/Form'
import { Message } from './components/Message';
import {AddUsers} from './components/AddUsers'


export default function App() {
  const classes = useStyles();

  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
      text: '',
      author: '',
    })
    const [users, setUser] = useState([])

    const addUser = (newUser) => {
      setUser([...users, newUser])
    }


    const ROBOT_MESSAGE = 'Сообщение получено'
    
    useEffect(() => {
      if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
        setTimeout(()=>{
          setMessageList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author: 'robot'}])
        }, 1000)
      }
    },[messageList])
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="md">
        <div className='user'>
          <AddUsers addUser={addUser}/>
          <InteractiveList 
          className={classes.chat} 
          users={users}></InteractiveList>
        </div>
        <Typography
        className={classes.message}>
          <div className='messageList'>{
          messageList.map((e,i)=><Message text={e.text} author={e.author} key={i}></Message>)
      }
    </div> 
    <div className="reverse">
        <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}



 

  

    // <div className="App">
      
    //   
    // </div>
// export default App;


// import './App.css';
// import React, {useState, useEffect} from 'react'


// function App() {

//   const [messageList, setMessageList] = useState([])
//   const [messageBody, setMessageBody] = useState({
//     text: '',
//     author: '',
//   })

//   const ROBOT_MESSAGE = 'Сообщение получено'

//   useEffect(() => {
//     if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
//       setTimeout(()=>{
//         setMessageList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author: 'robot'}])
//       }, 1000)
//     }
//   },[messageList])

//   return (
// 
//     // <div className="App">
//     //   <div className="reverse">
//     //     <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
//     //   </div>
//     //   <div className='messageList'>
//     //     {
//     //       messageList.map((e,i)=><Message text={e.text} author={e.author} key={i}></Message>)
//     //     }
//     //   </div> 
//     // </div>
//   );
// }

// export default App;
