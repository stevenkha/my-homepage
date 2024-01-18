import React, { useEffect, useState } from "react";

interface Manga {
    Cover: string;
    Title: string;
    Viewed: string;
    Current: string;
}

interface MangaList {
    mangas: Manga[]
}

const MangaTab: React.FC = () => {
    const [mangaData, setMangaData] = useState<Manga[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make API call to fetch manga data
                const response = await fetch('/api/manga');
                const data = await response.json();

                setMangaData(data);
            } catch (error) {
                console.error('Error fetching manga data:', error);
            }
        };
    
        fetchData();
      }, []);

    return (
        <h2>Manga</h2>
    );
};

export default MangaTab;