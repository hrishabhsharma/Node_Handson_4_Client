import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./hrep.css"

const Dashboard = () => {
    const nav = useNavigate()
    const [Data,setData] = useState('')
    useEffect(()=>{
        const token = localStorage.getItem('token')
        // const coding = JSON.parse(window.atob(token.split('.')[1]))
        // console.log(coding.exp)
        // const time = parseInt(Date.now()/1000)
        // console.log(time)
        const interval = setInterval(() => {
            axios.get("https://hrishabh-hrep-login.onrender.com/login/dashboard",{
                headers:{
                    "authorization": `bearer ${token}`
                }
            })
            .then((res)=>setData(res.data.msg))
            .catch(err=>{
                console.log(err.response.data.msg)
                setTimeout(()=>{
                    return nav("/")
                },500)
            })
          }, 1000);
        return () => clearInterval(interval);
    },[nav])

  return (
    <>
    <div className='dashboard'>
        <h1>{Data}</h1>
    </div>
    </>
  )
}

export default Dashboard