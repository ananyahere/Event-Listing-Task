import React, {useEffect, useContext} from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {LoginStatusContext} from '../hooks/LoginStatusContext'
import {UserContext} from '../hooks/UserContext'
import Signup from '../screens/auth/Signup'
import Login from '../screens/auth/Login'
import Logout from '../screens/auth/Logout'
import Events from '../screens/events/Events'
import CreateEvent from '../screens/events/CreateEvent'
import Home from '../screens/Home'

function Routes() {
  const {setIsLoggedIn} = useContext(LoginStatusContext)
  const {userStateDispatch} = useContext(UserContext)
  const history = useHistory()
  
  const checkLoginStatus = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      userStateDispatch({type: "USER", payload: user})
      setIsLoggedIn(true)
      // redirect to '/'
      history.push('/')
    }else{
      setIsLoggedIn(false)
      // redirect to '/login'
      history.push('/login')
    }
    // note: it is necessary to redirect only after the state is set
  }

  
  useEffect(() => {
    checkLoginStatus()    
  }, [])

  return (
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/login"><Login/></Route>      
      <Route path="/logout"><Logout/></Route>
      <Route path="/createEvent"><CreateEvent/></Route>
      <Route path="/events"><Events/></Route>
    </Switch>
  )
}

export default Routes