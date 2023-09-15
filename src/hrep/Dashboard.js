import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    console.log(localStorage.getItem('token'))
    // console.log(token)
    // const [Token] = useState(localStorage.getItem('token'))
    // console.log(Token)
    const [Data,setData] = useState('')
    useEffect(()=>{
        console.log(localStorage.getItem('token'))
        const token = localStorage.getItem('token')
        axios.get("https://hrishabh-hrep-login.onrender.com/login/dashboard",{
            headers:{
                "authorization": `bearer ${token}`
            }
        })
        .then((res)=>{console.log(res.data.msg);if(res.data){setData(res.data)}})
        .catch(err=>console.log(err))
    },[])
  return (
    <div>Dashboard
        <h1>{Data}</h1>
    </div>
  )
}

export default Dashboard