import React, { useEffect, useState } from "react";
import styles from '../CSS/AnimeTab.module.css'
import { animeGetURL, animeEditURL } from "../utils/api";

interface AnimeInfo {
    cover: string;
    title: string;
    viewed: string;
    current: string;
    slug: string;
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
                    const response = await fetch(animeGetURL as string);
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
            <h2>New Episodes</h2>
            <div>
                {animeData.scheduledAnimes ? (
                    <div className={styles.gridContainer}>
                        {animeData.scheduledAnimes.map((anime, index) => (
                            <div key={index} className={styles.gridItem}>
                                <img src={anime.cover} alt={`Cover for ${anime.title}`} className={styles.coverImage} />
                                <h3>{anime.title}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        No new animes
                    </div>
                )}
            </div>
            <h2>Anime</h2>
            <div className={styles.gridContainer}>
            {animeData.backlogAnimes.map((anime, index) => {
                    return (
                        <div key={index} className={styles.gridItem}>
                            <img src={anime.cover} alt={`Cover for ${anime.title}`} className={styles.coverImage} />
                            <div style={{position: "relative", paddingBottom: "100px"}}>
                                <h3>{anime.title}</h3>
                            </div>
                            <div className={styles.animeWatchedInfo}>
                                <p>Viewed: {anime.viewed}</p>
                                <p>Current: {anime.current}</p>
                                <a href={`${animeEditURL as string}`} className={styles.editLink}>Edit</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimeTab;