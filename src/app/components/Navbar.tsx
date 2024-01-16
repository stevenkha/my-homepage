import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav>
            <Link href="/manga">
                <a>Mangas</a>
            </Link>
            <Link href="/anime">
                <a>Animes</a>
            </Link>
        </nav>
    );
};

export default Navbar;