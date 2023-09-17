import React from 'react'
import {Routes , Route} from 'react-router-dom'

import Signup from './hrep/Signup'
import Login from './hrep/Login'
import Dashboard from './hrep/Dashboard'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App