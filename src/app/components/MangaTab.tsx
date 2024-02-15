import React, { useEffect, useState } from "react";
import styles from '../CSS/MangaTab.module.css'
import { mangaGetURL } from "../utils/api";

interface MangaInfo {
    cover: string;
    title: string;
    viewed: string;
    viewedLink: string;
    current: string;
    currentLink: string;
}

interface MangaPayload {
    mangas: MangaInfo[];
}

function setStorage(data: MangaPayload) {
    const jsonString = JSON.stringify(data);
    sessionStorage.setItem('mangaData', jsonString);
}

const MangaTab: React.FC = () => {
    const [mangaData, setMangaData] = useState<MangaPayload>({ mangas: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const existingData = JSON.parse(sessionStorage.getItem('mangaData') as string);

                if (existingData !== null) {
                    setMangaData(existingData);
                    return;
                }
                
                const response = await fetch(mangaGetURL as string);
                const data: MangaPayload = await response.json();
                setStorage(data);
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
                            <div>
                                <h3>{manga.title}</h3>
                                <span className={styles.itemSpan}>
                                    Viewed:  
                                    <a href={manga.viewedLink} style={{color: 'black', paddingLeft: 5}}>{manga.viewed}</a>
                                </span>
                                <span className={styles.itemSpan}>
                                    Current: 
                                    <a href={manga.currentLink} style={{color: '#059e9a', paddingLeft: 5}}>{manga.current}</a>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MangaTab;
