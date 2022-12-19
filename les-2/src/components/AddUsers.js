import { useState } from 'react'
import IButton from '@mui/material/Button';


export function AddUsers( {addUser} ) {
  const [userId, setUserId] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
   addUser({
    userId
  })
    console.log('input', userId)

    setUserId('')
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={userId}
        onChange={(event) => setUserId(event.target.value)}
        />
        <IButton type="submit">Add user</IButton>
      </form>
      
    </>
  )
}
