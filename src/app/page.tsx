'use client'
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MangaTab from './components/MangaTab'; // Import your MangaTab component
import AnimeTab from './components/AnimeTab';

const Home: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("MangaTab");

  const renderComponent = () => {
    switch (activeComponent) {
      case "MangaTab":
        return <MangaTab />;
      case "AnimeTab":
        return <AnimeTab />;
      default:
        return <MangaTab />;
    }
  };

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  );
};

export default Home;
