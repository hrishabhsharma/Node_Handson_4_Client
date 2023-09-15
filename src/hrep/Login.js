import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate()
    const [User,setUser] = useState({
        email:    "",
        password: "",
    })
    const handleUser = (e)=>{
        setUser({...User,[e.target.name]:e.target.value})
    }
    const login = async(e)=>{
      e.preventDefault();
      localStorage.clear()
      console.log(localStorage.getItem('token'))
      await axios.post("https://hrishabh-hrep-login.onrender.com/login",User)
      .then(res=>{localStorage.setItem("token",(res.data.token));console.log(localStorage.getItem('token'))})
      .catch(err=>console.log(err))
      nav('/dashboard')
    }
      // const [Token,setToken] = useState("")
      // useEffect(()=>{
      //   setToken(localStorage.getItem('token'))
      // },[setToken])
      // localStorage.clear()
      // const Bush = localStorage.getItem("token")
      // console.log(Bush)
    
    // useEffect(()=>{
    //     localStorage.setItem("token",JSON.stringify(Token))
    //     const token = JSON.parse(localStorage.getItem('token'));
    //     // console.log(token)
    //     if (token) {
    //         setToken(token);
    //         }
    // },[Token])
      // console.log(Token)
      // setUser({...User,token:res.data.token})}
    // localStorage.clear()
  return (
    <div>
      <h1>This is Login Page</h1>
      <div>
        <h3>This is login tab</h3>
        <form onSubmit={login}>
          <label>Email</label>
          <input type='text' name='email' onChange={handleUser}/><br/>
          <label>Password</label>
          <input type='password' name='password' onChange={handleUser}/><br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <button onClick={()=>nav("/signup")}>Go to Register/Signup</button>
    </div>
  )
}

export default Login