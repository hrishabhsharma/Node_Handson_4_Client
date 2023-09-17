import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./hrep.css"

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
  const [Message,setMessage] = useState("")
  const register = (e)=>{
    e.preventDefault();
    axios.post("https://hrishabh-hrep-login.onrender.com/register",User)
    .then(res=>{
      console.log(res.data.msg)
      setMessage(res.data.msg)
      if(res.data.token){
        setTimeout(()=>{
          nav("/")
        },1000)
      }
    })
    .catch(err=>console.log(err.response.data.msg))
  }
  return (
    <div className='Page signup'>
      <h1>SignUp Page<br/> Hrep</h1>
        <form onSubmit={register}>
          <div className="form-floating mb-3">
            <input name='name' onChange={Userhandle} type="text" className="form-control" id="Nm" placeholder="Username"/>
            <label htmlFor="Nm">Enter Username</label>
          </div>
          <div className="form-floating mb-3">
            <input name='phone' onChange={Userhandle} type="number" className="form-control" id="ph" placeholder="Phone Number"/>
            <label htmlFor="ph">Enter Your Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <input name='email' onChange={Userhandle} type="email" className="form-control" id="eml" placeholder="name@example.com"/>
            <label htmlFor="eml">Email address</label>
          </div>
          <div className="form-floating">
            <input name='password' onChange={Userhandle} type="password" className="form-control" id="pwd" placeholder="Password"/>
            <label htmlFor="pwd">Password</label>
          </div>
          {
            Message ? <div id="emailHelp" className="form-text">{Message}</div> : ""
          }
        <button type='submit'>Submit</button>
        </form>
      <p className='bottom_msg singup_btm' onClick={()=>nav("/")}>Already have an account? Go to Login</p>
    </div>
  )
}

export default Signup