import React, { useState } from 'react'
import SpotifyData from '../../Data/SpotifyData'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import Player from '../Player'
import { Link } from "react-router-dom"

export default function DisplayHome({ setplayersong, setplaylist }) {

  const allsong = SpotifyData.flatMap((artist)=>artist.Playlist)

 
  //RomanticSongs filter here
const RomanticSongs = allsong.filter(song =>
  song.SongDisc.toLowerCase().includes("romantic")
);

  
  // console.log(romanticsong)

  return (
    <div className='Scrollbar text-white lg:px-2  w-full  overscroll-scroll h-[70vh]'>

      <div className=' md:hidden lg:hidden'>
      <h1>hello</h1>
      </div>
     
      <div className='flex flex-col gap-3'>
        <h1 className='text-[1.5rem] font-bold'>Recommended for you</h1>

        {/* Recommended Artists */}
        <div className='flex  w-full  gap-4 overflow-x-scroll'>
          {SpotifyData.map((artist, artistIndex) => (
            <Link to="/playlist" >
              <div key={artistIndex}
                onClick={() => setplaylist(artist)}>
                <div className='flex flex-col gap-2 h-60 w-40 lg:h-70 relative rounded-[10px] lg:w-50 justify-center px-4 overflow-hidden group hover:bg-[#1a1a1a]'>
                  <img
                    className='lg:w-42 lg:h-45 w-42 h-30 rounded-[10px]'
                    src={artist.ArtiestPhoto}
                    alt={artist.ArtiestName}
                  />
                  <div className='bg-green-500 hidden justify-center items-center cursor-pointer absolute top-35 right-6 w-12 h-12 rounded-[50%] transition-transform duration-900 group-hover:flex hover:scale-110'>
                    <TbPlayerPlayFilled className='text-black' />
                  </div>
                  <p>Hottest Hindi Songs</p>
                  <p>{artist.ArtiestName}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Playlist Songs */}
<div className='flex flex-col '>
          <h1 className=' text-white text-[1.5rem] font-bold py-2 px-2'>Romantic Songs</h1>
   <div className='flex  w-full  gap-4 overflow-x-scroll'>
 
  {RomanticSongs.length > 0 ? (
    RomanticSongs.map((song, index) => (
      <div
        key={index}
        onClick={() => setplayersong(song)}
        className='cursor-pointer justify-between items-center relative group'
      >
        <div className='flex flex-col relative gap-2 h-60 w-40 lg:h-70 rounded-[10px] lg:w-50 justify-center px-4 overflow-hidden group hover:bg-[#1a1a1a]'>
          <img
            className='w-42 lg:h-45 h-30  rounded-[10px] '
            src={song.SongImage}
            alt={song.SongName} 
          />
          <p>{song.SongDisc}</p>
          <p>{song.SongName}</p>
        </div>
         <div className='bg-green-500   hidden justify-center items-center cursor-pointer absolute top-35 right-6 w-12 h-12 rounded-[50%] transition-transform duration-900 group-hover:flex hover:scale-110'>
                    <TbPlayerPlayFilled className='text-black' />
        </div>
       
      </div>
    ))
  ) : (
    <p className="text-gray-400">No songs found</p>
  )}
</div>
</div>
       
      </div>


    </div>
  )
}
