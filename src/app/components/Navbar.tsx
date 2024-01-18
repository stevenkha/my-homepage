// Navbar.tsx
import React from "react";
import MangaTab from "./MangaTab"; // Import your MangaTab component

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your App Name</div>
        <button className="text-white hover:text-gray-300 focus:outline-none">
          Manga
        </button>
      </div>
      <MangaTab />
    </nav>
  );
};

export default Navbar;
