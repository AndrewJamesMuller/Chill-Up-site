import Header from '../components/Header'
import "./home.css"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { steps } from '../data'
export default function Home() {
    return (
        <div className="home_container">
            {/* <Header /> */}
            <div className="home">
                <section className="intro-image" style={{backgroundImage: `url(${import.meta.env.BASE_URL}background1.svg)`}}>
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
                    <div className="steps_left-block">
                        <div className="circle">
                            <p className="text3">Кар’єра — це шлях, <br/> i він змінюється у більшості людей</p>
                        </div>
                        <div className="letter_block">
                            <p className="text1-5">
                                На цьому сайті ти знайдеш різні напрямки і їх спеціальності. Не спіши! Chill up)
                            </p>
                            <h3 className="letter_block_title">P.S.</h3>
                            <p className="text2">
                                Наш розробник зустрівся з такою проблемою, пошуку спеціальності. Тому й зараз цей сайт існує!
                            </p>
                        </div>
                    </div>
                    <div className="steps_right-block">
                        <div className="steps_title"><h2 className="steps_title_text">підказки:</h2></div>
                        {steps.map((step, index) => (
                            <div className="step" key={index}>
                                <h2 className="step_number">{index + 1}</h2>
                                <div className="text-block-steps">
                                    {step.link && (
                                        <Link className="step-link" to={step.link}>
                                            <p className='steps-text'>{step.text}</p>
                                        </Link>
                                    )}
                                    {!step.link && <p>{step.text}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}