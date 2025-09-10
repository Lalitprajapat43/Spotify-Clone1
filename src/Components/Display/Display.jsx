import React from 'react'
import DisplayNavBar from './DisplayNavBar'
import { Routes,Route } from 'react-router-dom'
import DisplayHome from "./DisplayHome"
import SearchBar from './SearchBar'


export default function Display({setplayersong, setplaylist}) {
  return (
    <div className='h-[80vh] sm:bg-[#202020]  lg:bg-[#202020]  min-w-200 w-352 rounded-[10px]'>
      <DisplayNavBar/>
 
    
    <Routes>
       <Route path='/' element={ <DisplayHome setplayersong={setplayersong} setplaylist={setplaylist}/>}/>
       <Route path='/s' element={<SearchBar/>}/>
    </Routes>
   
      
        
      
      
    </div>
  )
}
