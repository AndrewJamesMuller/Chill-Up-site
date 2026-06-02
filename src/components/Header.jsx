import Home from '../pages/Home'
import "./header.css"
import ProfCatalog from '../pages/ProfCatalog'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/"> <img src="/logo.svg" alt="logo" className="logo" /> </Link>
                <Link to="/ProfCatalog" className="nav-link">Професії</Link>
                <Link to="/Helper" className="nav-link">Поради для вступу</Link>
                <Link to="/about" className="nav-link">Про нас</Link>
            </nav>
        </header>
    )
}