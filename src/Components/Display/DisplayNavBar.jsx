import React from "react";

export default function DisplayNavBar() {
  const categories = ["All", "Music", "Podcasts", "Live", "Trending", "News"];

  return (
    <div className="w-full px-4 py-2 bg-black">
      <ul
        className="
          flex 
          gap-2 
          text-white 
          overflow-x-auto 
          scrollbar-hide
          sm:justify-center
          md:flex-wrap
        "
      >
        {categories.map((item, index) => (
          <li
            key={index}
            className="
              bg-[#373737] 
              px-3 py-1 
              rounded-[20px] 
              font-semibold 
              whitespace-nowrap
              cursor-pointer
              transition-colors 
              duration-200
              hover:bg-gray-600
              active:bg-white 
              active:text-black
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
