import React, {useState}  from 'react'
import './Form.css'
import {Link} from 'react-router-dom'
import {UserContext} from '../../hooks/UserContext'
import {LoginStatusContext} from '../../hooks/LoginStatusContext'
import { useContext } from 'react'
import {useHistory} from 'react-router-dom'

function Signup() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [password, setPassword] = useState('')
  const {userStateDispatch} = useContext(UserContext)
  const {setIsLoggedIn} = useContext(LoginStatusContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch("/signup", {
        method: 'POST',
        body: JSON.stringify({email, password, companyName}),
        headers: {'Content-Type': 'application/json'}
      })
      const data = await response.json()
      console.log('user signup',data)
      localStorage.setItem("token", data.token)
      localStorage.setItem("token", data.token)
      userStateDispatch({type: "USER", payload: data.user})
      setIsLoggedIn(true)
      history.pushState('/')
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
    <form onSubmit={submitHandler}>
      <h2>Signup</h2>
      <label htmlFor="email">Email</label>
      <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="companyName">Company Name</label>
      <input type="text" required value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <input type="text" requires value={password} onChange={e => setPassword(password)} />
      <button>signup</button>
      <p className="form-p">
        <Link to="/login">Already have an account?</Link>
      </p>
    </form>
    </>
  )
}

export default Signup