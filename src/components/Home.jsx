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
                    <h1 className="main_title">Привіт!</h1>
                    <div className="content-block1">
                        <div className="textBlock">
                            <p className="intro_text"> Закінчуєш 9/11 клас і не вирішив, яку спеціальність обрати? Хочеш дізнатися більше про спеціальності? Гортай далі!</p>
                        </div>
                        <div className="arrow-down">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
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