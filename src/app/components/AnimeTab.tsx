import React, { useEffect, useState } from "react";

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

        fetchData();
    }, []);

    return (
        <h2>Anime</h2>
    );
};

export default AnimeTab;