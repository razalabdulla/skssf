import { useState } from 'react'
import './App.css'
 
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import Home from './Pages/Home'
function App() {
 


  return (
    <>
    <div className="">
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
    </div>
    </>
  )
}

export default App
