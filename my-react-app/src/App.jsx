
import './App.css'
 
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import Home from './Pages/Home'
import PosterSet from './Pages/PosterSet'
function App() {
 


  return (
    <>
    <div className="">
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/ready' element={<PosterSet/>}/>

   </Routes>
    </div>
    </>
  )
}

export default App
