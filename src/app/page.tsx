import Image from 'next/image'
import React, {Children, useState} from 'react'
import Navbar from './components/Navbar'
import MangaTab from './components/MangaTab';
import AnimeTab from './components/AnimeTab';

const Home: React.FC = () => {

  const acitveTab = new URLSearchParams(location.search).get('tab');
  return (
    <div>
      <Navbar />
      {acitveTab === 'manga' && <MangaTab />}
      {acitveTab === 'anime' && <AnimeTab />}
    </div>
  );
};

export default Home;