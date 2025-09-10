import React from 'react'
import { TbPlayerPlayFilled } from 'react-icons/tb'

export default function Playlist({ playlist,setplayersong}) {
  // Guard: jab tak data na aaye
  if (!playlist?.Playlist) {
    return (
      <div className='h-[80vh] bg-[#202020] w-full flex justify-center items-center text-white rounded-[10px]'>
        <p>No playlist selected</p>
      </div>
    )
  }

  const tracks = playlist.Playlist; // <-- yahi array hai

  return (
    <div className='h-[80vh] bg-[#202020] min-w-300 w-full overflow-hidden rounded-[10px] relative'>
      {/* Top artist photo */}
      <div className='w-full min-w-300 h-[50vh]'>
        <img
          className='w-full h-full border-none object-fill '
          src={playlist.ArtiestPhotor || ''}
          alt={playlist.ArtiestName || 'Artist'}
        />
      </div>

      {/* Artist info */}
      <div className='absolute top-[40vh] left-4 px-10 bg-[#00000044] text-white rounded-md'>
        <h1 className='font-bold text-[1.2rem]'>{playlist.ArtiestName || 'Unknown Artist'}</h1>
        <p>Total Song: {tracks.length}</p>
      </div>

      {/* Playlist section */}
      <section>
        <div className='w-full h-[50vh]  px-2 text-white overflow-y-auto Scrollbar'>
          {tracks.map((song, index) => (
            <div
              key={song.id ?? index}
              className='w-full h-[8vh] flex justify-between pr-4 items-center shadow-2xl mb-2 rounded-md group'
           
            >
              <div className='flex items-center gap-4 group'>
                <img
                  className='w-[50px] h-[8vh] object-fill '
                  src={song.SongImage || ''}
                  alt={song.SongName || `Track ${index + 1}`}
                />
                <h1 className='text-[1.2rem] font-bold'>{song.SongName ?? `Track ${index + 1}`}</h1>
              </div>

              <button
                type='button'
                className='bg-green-500  justify-center items-center cursor-pointer w-12 h-12 rounded-full transition-transform duration-300  hover:scale-110 hidden group-hover:flex   '
                onClick={() => {
                    setplayersong(song)
                }}
                aria-label={`Play ${song.SongName ?? `Track ${index + 1}`}`}
              >
                <TbPlayerPlayFilled className='text-black' />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
