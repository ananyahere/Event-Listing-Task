import React, {useState} from 'react'
import './Form.css'
import {Link} from 'react-router-dom'
import {UserContext} from '../../hooks/UserContext'
import {LoginStatusContext} from '../../hooks/LoginStatusContext'
import { useContext } from 'react'
import {useHistory} from 'react-router-dom'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {userStateDispatch} = useContext(UserContext)
  const {setIsLoggedIn} = useContext(LoginStatusContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch("/users/login", {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'}
      })
      const data = await response.json()
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      userStateDispatch({type: "USER", payload: data.user})
      setIsLoggedIn(true)
      history.push('/')
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
      <button>login</button>
      <p className="form-p">
        <Link to="/signup">Don't have an account?</Link>
      </p>
    </form>
    </>
  )
}

export default Login