import React, { useState } from 'react'

// import Icons
import { BiSearch } from 'react-icons/bi';
import { BsPlusCircle } from 'react-icons/bs';
import { LuPanelLeftClose } from "react-icons/lu";
import { TiThListOutline } from "react-icons/ti";
import { TiPin } from "react-icons/ti";
import { LuPanelRightClose } from "react-icons/lu";
import DisplayHome from './Display/DisplayHome';

import {Link} from "react-router-dom"

// import Data
import SpotifyData from '../Data/SpotifyData';


export default function SideBar({setplaylist }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleclick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='hidden lg:flex md:flex'>
            <section className={` h-[80vh] px-2 rounded-[10px] bg-[#202020]  text-white font-sans  transition-all duration-900 ${isOpen ? "w-90" : "w-20 pt-5"}`}>
             
              
                <header className=' fix '>
                    <div className='flex w-full justify-between px-2 items-center h-20 '>
                        <div className={` items-center gap-1 flex ${isOpen ? "flex" : "hidden"}`} >
                            <LuPanelLeftClose className='size-6' onClick={handleclick} />
                            <h2 className='font-bold  text-[1.2rem]  '>Your Library</h2>
                        </div>
                        <div className={`flex items-center
                     gap-2 ${isOpen ? "flex" : "flex-col justify-center gap-3 "}`}>

                            <LuPanelRightClose className={` ${isOpen ? "hidden" : "flex size-8"} `} onClick={handleclick} />
                            <BsPlusCircle className={` ${isOpen ? "size-7" : "size-9  "} `} />

                        </div>
                    </div>
                    <div className={` gap-2 h-10  ${isOpen ? "flex" : "hidden"}  `}>
                        <li className=' list-none bg-gray-700 p-1 h-fit rounded-2xl px-3'>Playlist</li>
                        <li className=' list-none bg-gray-500 p-1 h-fit rounded-2xl px-2'>Artiest</li>

                    </div>

                </header>

                <div className='Scrollbar  overflow-y-scroll h-[60vh]   '>
                    <div className={`flex justify-between px-2 gap-2 items-center h-5 mt-2 ${isOpen ? "flex" : "hidden"}  `} >
                        <BiSearch className='size-7' />
                        <div className='flex items-center gap-2 '>
                            <p>Recents</p>
                            <TiThListOutline />
                        </div>
                    </div>
                    <div className='flex w-full gap-3 h-12 mt-4 '>
                        <img
                            className='w-12 h-full rounded-[5px] '
                            src='data:image/jpeg;base64,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' alt='' />
                        <div className='flex flex-col h-full'>
                            <h1 className=' font-bold text-[1rem]'>Liked Song</h1>
                            <div className='flex  gap-0.5 items-center'>
                                <TiPin />
                                <p className='text-[.7rem] text-gray-400'>Playlist</p>
                                <li className='text-[.7rem] text-gray-400'>6 Songs</li>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-3 h-12 mt-4 ' >
                        {
                            SpotifyData.map((e,index) => (
                               <Link to={"/playlist"} >
                                 <div className='flex  w-full gap-3 h-12 mt-1 cursor-pointer ' key={index}
                                onClick={()=>(setplaylist(e))}
                                >
                                    <img
                                        src={e.ArtiestPhoto} alt=''
                                        className='w-12 h-full rounded-[50px] ' />
                                    <div className='flex flex-col h-full'>
                                        <h1 className=' font-bold text-[1rem]'>{e.ArtiestName}</h1>
                                        <div className='flex  gap-0.5 items-center'>

                                            <p className='text-[.7rem] text-gray-400'>Artiest</p>

                                        </div>

                                    </div>
                                </div>
                               </Link>
                            ))

                        }
                    </div>


                </div>





            </section>
        </div>
    )
}
