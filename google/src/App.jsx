import { useState } from 'react'
import './App.css'
import LoginButton from './Login'
import LogoutButton from './Logout'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Authorization</h1>
      <LoginButton />
      <LogoutButton />
      <hr />
      <Profile />
    </>
  )
}

export default App
