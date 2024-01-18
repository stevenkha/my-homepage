import React from "react";

interface NavbarProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => setActiveComponent("MangaTab")}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          Manga
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
