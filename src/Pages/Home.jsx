import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import Player from '../Components/Player'
import Display from '../Components/Display/Display.jsx'

import Playlist from '../Components/Display/Playlist.jsx'
import { Routes,Route } from 'react-router-dom'


export default function Home() {
  const [playersong , setplayersong] =useState(null)
  const [playlist ,setplaylist ] = useState(null)
  console.log(playlist)

 

  return (
    <div className='h-[100vh] w-full p-2 overflow-hidden'>
    <NavBar />
    <div className='flex gap-1'>
        <SideBar setplaylist={setplaylist} />
      <Routes>
         <Route path='/' element={ <Display setplayersong={setplayersong} setplaylist={setplaylist} />}/>
          <Route path='/playlist' element={<Playlist playlist={playlist} setplayersong={setplayersong}/>}/>
      </Routes>
    </div>
    <Player playersong={playersong} />
  
      
    </div>
  )
}
