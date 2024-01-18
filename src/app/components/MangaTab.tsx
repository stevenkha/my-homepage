import React, { useEffect, useState } from "react";
import styles from '../CSS/MangaTab.module.css'

interface MangaInfo {
    Cover: string;
    Title: string;
    Viewed: string;
    Current: string;
}

interface MangaPayload {
    mangas: MangaInfo[];
}

const MangaTab: React.FC = () => {
    const [mangaData, setMangaData] = useState<MangaPayload>({ mangas: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make API call to fetch manga data
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
                {mangaData.mangas.map((manga, index) => (
                    <div key={index} className={styles.gridItem}>
                        <img src={manga.Cover} alt={`Cover for ${manga.Title}`} />
                        <h3>{manga.Title}</h3>
                        <p>Viewed: {manga.Viewed}</p>
                        <p>Current: {manga.Current}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MangaTab;
