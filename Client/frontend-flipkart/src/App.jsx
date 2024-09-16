import React from 'react'
import Header from './Components/Header'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import AddPro from './Components/AddPro'
import {Route, Routes} from 'react-router-dom'
import Structure from './Components/Structure'

const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Structure/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/addpro' element={<AddPro/>}></Route>
      </Routes>
    </div>
  )
}

export default App
