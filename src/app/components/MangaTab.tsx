import React, { useEffect, useState } from "react";
import styles from '../CSS/MangaTab.module.css'

interface MangaInfo {
    cover: string;
    title: string;
    viewed: string;
    current: string;
    currentLink: string;
}

interface MangaPayload {
    mangas: MangaInfo[];
}

const MangaTab: React.FC = () => {
    const [mangaData, setMangaData] = useState<MangaPayload>({ mangas: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/v1/mangas');
                const data: MangaPayload = await response.json();
                setMangaData(data);
            } catch (error) {
                console.error('Error fetching manga data:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className={styles.mangaGrid}>
            <h2>Manga</h2>
            <div className={styles.gridContainer}>
            {mangaData.mangas.map((manga, index) => {
                    return (
                        <div key={index} className={styles.gridItem}>
                            <img src={manga.cover} alt={`Cover for ${manga.title}`} className={styles.coverImage} />
                            <h3>{manga.title}</h3>
                            <p>Viewed: {manga.viewed}</p>
                            <a href={manga.currentLink} style={{color: '#059e9a'}}>Current: {manga.current}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MangaTab;
