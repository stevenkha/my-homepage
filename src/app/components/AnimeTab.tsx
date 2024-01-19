import React, { useEffect, useState } from "react";
import styles from '../CSS/AnimeTab.module.css'

interface AnimeInfo {
    cover: string;
    title: string;
    viewed: string;
    current: string;
    currentLink: string;
}

interface AnimePayload {
    animes: AnimeInfo[];
}

const AnimeTab: React.FC = () => {
    const [animeData, setAnimeData] = useState<AnimePayload>({ animes: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // TODO: move api to .env file
                const response = await fetch('http://localhost:8000/v1/animes');
                const data: AnimePayload = await response.json();
                setAnimeData(data);
            } catch (error) {
                console.error('Error fetching anime data:', error)
            }
        }

        // TODO: cache results when not navigating away from page

        fetchData();
    }, []);

    return (
        <div className={styles.animeGrid}>
            <h2>Manga</h2>
            <div className={styles.gridContainer}>
            {animeData.animes.map((anime, index) => {
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