import React, { useEffect, useState } from "react";

interface Manga {
    Cover: string;
    Title: string;
    Viewed: string;
    Current: string;
}

const MangaTab: React.FC = () => {
    const [mangaData, setMangaData] = useState<Manga[]>([]);

    useEffect(() => {
        fetch(MANGA_ENDPOINT)
            .then(resp => resp.json)
            .then(data => setMangaData(data));
    }, []);

    return (
        <h2>Manga</h2>
    );
};

export default MangaTab;