export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/Home"> <img src="/public/logo.svg" alt="logo" className="logo" /> </Link>
                <Link to="/ProfCatalog">Професії</Link>
                <Link to="/Helper">Поради для вступу</Link>
                <Link to="/about">Про нас</Link>
            </nav>
        </header>
    )
}