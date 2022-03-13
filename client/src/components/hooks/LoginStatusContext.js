import React, {useState, createContext} from 'react'

export const LoginStatusContext = createContext()

export const LoginStatusProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <LoginStatusContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {props.children}
    </LoginStatusContext.Provider>
  )
}