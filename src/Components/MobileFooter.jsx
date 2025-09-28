import React from 'react'
import { Link } from 'react-router-dom';

// Icons ...
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function MobileFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
      <ul className="flex items-center justify-around py-2 px-4">
        <li className="flex-1 flex justify-center">
          <Link 
            to={'/'} 
            className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <IoHomeOutline className="text-2xl mb-1" />
            <span className="text-xs font-medium">Home</span>
          </Link>
        </li>
        <li className="flex-1 flex justify-center">
          <Link 
            to={'/'} 
            className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <CiSearch className="text-2xl mb-1" />
            <span className="text-xs font-medium">Search</span>
          </Link>
        </li>
        <li className="flex-1 flex justify-center">
          <Link 
            to={'/'} 
            className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <MdOutlinePlaylistAddCheckCircle className="text-2xl mb-1" />
            <span className="text-xs font-medium">Your Library</span>
          </Link>
        </li>
        <li className="flex-1 flex justify-center">
          <Link 
            to={'/'} 
            className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <CgProfile className="text-2xl mb-1" />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </li>
      </ul>
    </footer>
  )
}