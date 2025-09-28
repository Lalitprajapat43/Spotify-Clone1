import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoMdVolumeOff } from "react-icons/io";
import arjunvailly from "../assets/arijitsingh/arjunvailly.mp3";

export default function Player({ playersong }) {
  const audioRef = useRef(null);
  const [isplaying, setisplaying] = useState(false);
  const [progress, setprogress] = useState(0);
  const [duration, setduration] = useState(0);
  const [volume, setvolume] = useState(1);

  // Load metadata
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => setduration(audio.duration);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  // Play/pause handling
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setprogress(audio.currentTime);

    if (isplaying) {
      audio.play();
      audio.addEventListener("timeupdate", updateProgress);
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [isplaying]);

  // Autoplay when a new song is selected
  useEffect(() => {
    if (playersong && audioRef.current) {
      audioRef.current.load();
      setisplaying(true);
    }
  }, [playersong]);

  const handlepauseplay = () => {
    setisplaying(!isplaying);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setisplaying(false);
      setprogress(0);
    }
  };

  // Volume buttons
  const increaseVolume = () => {
    const newVol = Math.min(volume + 0.1, 1);
    setvolume(newVol);
    audioRef.current.volume = newVol;
  };

  const decreaseVolume = () => {
    const newVol = Math.max(volume - 0.1, 0);
    setvolume(newVol);
    audioRef.current.volume = newVol;
  };

  const muteVolume = () => {
  if (volume === 0) {
    setvolume(100);
    audioRef.current.volume = 1; // 100 → 1
  } else {
    setvolume(0);
    audioRef.current.volume = 0;
  }
};


  if (!playersong) return null;

  return (
    <div className="w-full bg-white h-[8vh]  text-white">
      {/* Mobile View - Spotify Mini Player */}
  <div className="sm:hidden  flex w-full h-full bg-red-500 items-center justify-between px-2">
        {/* Audio element */}
        <audio ref={audioRef} src={playersong?.SongLink || arjunvailly} />

        {/* Song Info */}
        <div className="flex items-center gap-2">
          <img
            src={playersong.SongImage}
            alt="song"
            className="h-12 w-12 object-cover rounded"
          />
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold">{playersong.SongName}</h1>
            <p className="text-xs text-gray-400">{playersong.SongDisc}</p>
          </div>
        </div>

        {/* Play/Pause */}
        <button
          onClick={handlepauseplay}
          className="bg-green-500 text-black w-10 h-10 rounded-full flex items-center justify-center"
        >
          {isplaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Mute */}
        <button onClick={muteVolume}>
          <IoMdVolumeOff className="text-xl" />
        </button>
      </div>

      {/* Desktop View - Full Controls */}
      <div className="hidden sm:flex w-full justify-between items-center pr-60 p-4 text-white">
        {/* Audio element */}
        <audio ref={audioRef} src={playersong?.SongLink || arjunvailly} />

        {/* Song Info */}
        <div className="flex gap-2 items-center w-[20rem]">
          <img src={playersong.SongImage} className="h-[9vh] rounded" />
          <div>
            <h1 className="font-bold">{playersong.SongName}</h1>
            <p className="text-sm text-gray-400">{playersong.SongDisc}</p>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center gap-2 w-[6rem] justify-between">
          <button onClick={decreaseVolume}>
            <CiCircleMinus className="text-[20px] active:text-green-600" />
          </button>
          <span className="text-xs">{Math.round(volume * 100)}%</span>
          <button onClick={increaseVolume}>
            <CiCirclePlus className="text-[20px] active:text-green-600" />
          </button>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center w-[20rem]">
          <div className="flex gap-4">
            <button onClick={handlepauseplay}>
              {isplaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleStop}>⏹</button>
          </div>

          <div className="flex justify-between w-[20rem] text-sm">
            <span>{progress.toFixed(1)}s</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={progress}
              onChange={(e) => {
                const newTime = Number(e.target.value);
                audioRef.current.currentTime = newTime;
                setprogress(newTime);
              }}
              className="min-w-[20rem] w-full"
            />
            <span>{duration ? duration.toFixed(1) : "0"}s</span>
          </div>
        </div>

        {/* Mute */}
        <button onClick={muteVolume}>
          <IoMdVolumeOff />
        </button>
      </div>
    </div>
  );
}
