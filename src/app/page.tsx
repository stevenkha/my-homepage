'use client'
import React, {Children, useState} from 'react'
import Navbar from './components/Navbar'
import MangaTab from './components/MangaTab';
import AnimeTab from './components/AnimeTab';

const Home: React.FC = () => {

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;