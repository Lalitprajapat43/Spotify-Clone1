import React from "react";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#121212] to-[#181818] min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-2 text-green-500 text-2xl font-bold">
          <FaSpotify className="text-3xl" />
          Spotify-Clone
        </div>
        <ul className="flex gap-6 text-white font-medium">
          <li className="hover:text-green-500 cursor-pointer">Features</li>
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Login</li>
        </ul>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Music for <span className="text-green-500">Everyone</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Stream your favorite songs, create playlists, and enjoy the power of music with our Spotify-Clone.
        </p>
        <li className="list-none mt-8">
          <Link
            to="/home"
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full text-lg transition-all inline-block"
          >
            Get Started
          </Link>
        </li>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} Spotify-Clone | Made with ❤️ using React
      </footer>
    </div>
  );
}
