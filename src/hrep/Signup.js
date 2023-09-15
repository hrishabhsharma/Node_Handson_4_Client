import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const nav = useNavigate()
  const [User,setUser] = useState({
    name: "",
    phone: "",
    email:    "",
    password: "",
  })
  const Userhandle=(e)=>{
    setUser({...User,[e.target.name]:e.target.value})
  }
  const register = (e)=>{
    e.preventDefault();
    axios.post("https://hrishabh-hrep-login.onrender.com/register",User)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <h1>This is Signup Page</h1>
      <div>
        <h3>This is Signup tab</h3>
        <label>Name of the user</label>
        <input type='text'name='name' onChange={Userhandle} required/><br/>
        <label>Phone Number</label>
        <input type='number' name='phone' onChange={Userhandle} required/><br/>
        <label>Email</label>
        <input type='email' name='email' onChange={Userhandle} required/><br/>
        <label>Password</label>
        <input type='password' name='password' onChange={Userhandle} required/><br/>
        <button onClick={register}>Submit</button>
      </div>
      <button onClick={()=>nav("/login")}>Go to login</button>
    </div>
  )
}

export default Signup