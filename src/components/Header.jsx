import Home from '../pages/Home'
import "./header.css"
import ProfCatalog from '../pages/ProfCatalog'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="header">
            <Link to="/"> <img src="/logo.svg" alt="logo" className="logo" /> </Link>
            <nav className="nav">
                <Link to="/ProfCatalog" className="nav-link">Професії</Link>
                <Link to="/Helper" className="nav-link">Поради для вступу</Link>
                <Link to="/about" className="nav-link">Про нас</Link>
            </nav>
            <button className={`burger-menu ${isOpen ? "open" : ""}`} onClick={()=>{setIsOpen(prev => !prev)}}>
                {/* {isOpen ? "✕" : "|||"} */}
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <nav className={`navMobile ${isOpen? "open" : ""}`}>
                <Link to="/ProfCatalog" className="nav-link2">- Професії</Link>
                <Link to="/Helper" className="nav-link2">- Поради для вступу</Link>
                <Link to="/about" className="nav-link2">- Про нас</Link>
            </nav>
        </header>
    )
}