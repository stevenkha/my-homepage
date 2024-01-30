import React from "react";
import styles from "../CSS/Navbar.module.css"

interface NavbarProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navList}>
        <button
          onClick={() => setActiveComponent("MangaTab")}
          className={styles.navButton}
        >
          Manga
        </button>
      </div>
      <div className={styles.navList}>
        <button
          onClick={() => setActiveComponent("AnimeTab")}
          className={styles.navButton}
        >
          Anime
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
