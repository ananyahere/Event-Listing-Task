import React, {useContext} from 'react'
import './Form.css'
import {LoginStatusContext} from '../../hooks/LoginStatusContext'
import {UserContext} from '../../hooks/UserContext'
import { useEffect } from 'react'

function Logout() {
  const {userStateDispatch} = useContext(UserContext)
  const {setIsLoggedIn} = useContext(LoginStatusContext)

  useEffect(() => {
    localStorage.clear()
    userStateDispatch({type: "CLEAR"})
    setIsLoggedIn(false)
  }, [])
  
  return (
    <div>We are sorry to see you leave</div>
  )
}

export default Logout