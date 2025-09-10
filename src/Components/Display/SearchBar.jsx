import React, { useState } from "react";

export default function SearchBar() {
  // Example arrays
  const songs = ["Arjun Vailly", "Kesariya", "Tum Hi Ho", "Apna Bana Le"];
  const artists = ["Arijit Singh", "Shreya Ghoshal", "Jubin Nautiyal", "Armaan Malik"];

  // Merge both arrays into one
  const allData = [
    ...songs.map((s) => ({ type: "Song", name: s })),
    ...artists.map((a) => ({ type: "Artist", name: a }))
  ];

  // State for search input
  const [search, setSearch] = useState("");

  // Filtered results
  const filteredResults = allData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search Songs or Artists..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-lg"
      />

      <div className="mt-4">
        {filteredResults.length > 0 ? (
          <ul className="list-disc pl-5">
            {filteredResults.map((item, index) => (
              <li key={index}>
                {item.name} <span className="text-sm text-gray-500">({item.type})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
}
