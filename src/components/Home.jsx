import Header from './Header'
import "./home.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'
export default function Home() {
    return (
        <div className="home_container">
            {/* <Header /> */}
            <div className="home">
                <section className="intro-image">
                    <h1 className="main_title"></h1>
                    <div className="content-block1">
                        <p className="intro_text">Вступна кампанія 2024 року вже розпочалася! Час обирати майбутню професію та готуватися до вступу. Ми допоможемо тобі зорієнтуватися у світі професій та знайти свій шлях до успіху.</p>
                        <img src="/public/right-arrow1.svg" alt="" className="arrow" />
                    </div>
                </section>
                <section className="steps">
                    <div className="steps_left-block"></div>
                    <div className="steps_right-block"></div>
                </section>
            </div>
            <Footer />
        </div>
    )
}