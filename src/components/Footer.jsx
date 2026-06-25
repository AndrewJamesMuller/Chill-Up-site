import { Link } from "react-router-dom";
import "./footer.css"
export default function Footer() {
    return (
        <footer className="footer">
            <Link to="/Home"> <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" className="logo2" /> </Link>
            <div className="footer-block1">
                <p className="footer_text">Івано-Франківськ 2026</p>
                <div className="phone">
                    <img src={`${import.meta.env.BASE_URL}phone.svg`} alt="" className="phone_icon" />
                    <p className="phone_number">+380671234567</p>
                </div>
            </div>
            <div className="footer-block2">
                <Link className="footer-link" to="/ProfCatalog">Професії</Link>
                <Link className="footer-link" to="/Helper">Поради для вступу</Link>
                <Link className="footer-link" to="/about">Про нас</Link>
            </div>
        </footer>
    )
}