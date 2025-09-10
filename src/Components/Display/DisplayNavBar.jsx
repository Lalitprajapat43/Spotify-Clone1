import React from 'react'

export default function DisplayNavBar() {
  return (
    <div className='flex w-full h-15  px-4 items-center '>
        <ul className='flex text-white gap-2'>
            <li className='bg-[#373737] p-1 rounded-[20px] font-bold px-2 h-fit active:bg-white'>All</li>
            <li className='bg-[#373737] p-1 rounded-[20px] font-bold px-2 h-fit active:bg-white'>Music</li>
            <li className='bg-[#373737] p-1 rounded-[20px] font-bold px-2 h-fit active:bg-white'>PodCasts</li>
        </ul>
      
    </div>
  )
}
