import { useState } from 'react';

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="header">
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <div className = {`nav-links ${menuOpen ? 'open' : ''}`}>
                <div id="header-left">
                    <a href="#home">Home</a>
                </div>
                <div id="header-right">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#cv">CV</a>
                </div>
            </div>
        </div>
    );
}