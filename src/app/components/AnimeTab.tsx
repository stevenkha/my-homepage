import React from "react";

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
    return (
        <h2>Anime</h2>
    );
};

export default AnimeTab;