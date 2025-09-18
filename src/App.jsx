import React, { useState } from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage'


export default function App() {
  // let [Photo,setPhoto] = useState({
    
  // })
  return (
    <div>
        
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
       
   
      
    </div>
  )
}
