import React, {useReducer, createContext} from 'react'
import {initialState, reducerFunc} from './UserReducer'

export const UserContext = createContext()

export const UserContextProvider = props => {
    const[userState, userStateDispatch] = useReducer(reducerFunc, initialState)

    return (
      <UserContext.Provider value={{userState, userStateDispatch}}>
        {props.children}
      </UserContext.Provider>
    )
}