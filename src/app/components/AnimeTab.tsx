import React, { useEffect, useState } from "react";
import styles from '../CSS/AnimeTab.module.css'

interface AnimeInfo {
    cover: string;
    title: string;
    viewed: string;
    current: string;
}

interface AnimePayload {
    scheduledAnimes: AnimeInfo[];
    backlogAnimes: AnimeInfo[];
}

function setStorage(data: AnimePayload) {
    const jsonString = JSON.stringify(data);
    sessionStorage.setItem('animeData', jsonString);
}

const AnimeTab: React.FC = () => {
    const [animeData, setAnimeData] = useState<AnimePayload>({ scheduledAnimes: [], backlogAnimes: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const existingData = JSON.parse(sessionStorage.getItem('animeData') as string);

                if (existingData !== null) {
                    setAnimeData(existingData);
                } else {
                    // TODO: move api to .env file
                    const response = await fetch('http://localhost:8000/v1/animes');
                    const data: AnimePayload = await response.json();
                    setStorage(data)
                    setAnimeData(data);
                }
            } catch (error) {
                console.error('Error fetching anime data:', error)
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.animeGrid}>
            <h2>Anime</h2>
            <div>
                {animeData.scheduledAnimes ? (
                    <div className={styles.gridContainer}>
                        {animeData.scheduledAnimes.map((anime, index) => (
                            <div key={index} className={styles.gridItem}>
                                <img src={anime.cover} alt={`Cover for ${anime.title}`} className={styles.coverImage} />
                                <h3>{anime.title}</h3>
                                <p>Viewed: {anime.viewed}</p>
                                <p style={{color: '#059e9a'}}>Current: {anime.current}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        No new animes
                    </div>
                )}
            </div>
            <div className={styles.gridContainer}>
            {animeData.backlogAnimes.map((anime, index) => {
                    return (
                        <div key={index} className={styles.gridItem}>
                            <img src={anime.cover} alt={`Cover for ${anime.title}`} className={styles.coverImage} />
                            <h3>{anime.title}</h3>
                            <p>Viewed: {anime.viewed}</p>
                            <p style={{color: '#059e9a'}}>Current: {anime.current}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimeTab;