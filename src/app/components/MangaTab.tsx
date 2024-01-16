import React from "react";

interface Manga {
    Cover: string;
    Title: string;
    Viewed: string;
    Current: string;
}

const MangaTab: React.FC = () => {
    return (
        <h2>Manga</h2>
    );
};

export default MangaTab;