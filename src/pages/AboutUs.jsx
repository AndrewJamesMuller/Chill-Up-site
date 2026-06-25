import Footer from "../components/Footer"
import "./aboutUs.css"
export default function AboutUs(){
return(
    <div className="aboutUsContainer">
        <h1 className="main_title1">Про нас</h1>
        <div className="contentblock1">
            <p className="text1">
                Привіт, ми ClillUp - поки що сайт, який допоможе вам з ознайомленням з професіями. В майбутньому, можливо, ми станемо компанією, в якої буде багато подібних сайтів. Цей сайт виконаний як проектна робота на React.js. Розробники: Дрибуленда Андрій, і Гнип Євген. 
            </p>
            <img className="logoL" src="/public/logo.svg" alt="" />
        </div>
        <div className="programmers">
            <div className="programmer">
                <img className="imageProgs" src="/public/mmm.png" alt="" />
                <p className="textAbout">
                    Дрибуленда Андрій - автор ідеї, дизайну, розробник структури React.js, верстки на компютерній версії, керівник проекту.
                </p>
            </div>
            <div className="programmer">
                <img className="imageProgs" src="/public/port.jpg" alt="" />
                <p className="textAbout">
                    Гнип Євген - Дизайнер мобільної версії сайту, експерт в сфері styles.css, креативна особа, що додала багато цікавих візуальних ефектів на сайт.
                </p>
            </div>
        </div>
        <div class="surprise-container">
            {/* Подарунок */}
            <div class="gift-icon">
                <img src="/public/gift.svg" alt="" className="gift" />
                <span class="gift-text">Наведи на мене</span>
            </div>
        
            {/* Величезний блок подяки */}
            <div class="thank-you-box">
                <h3 class="title-gift">Дякуємо!</h3>
                <p class="text-gift2">Дякуємо, що вибрали нас! <br/>Нам дуже приємно розвиватися разом з вами.</p>
            </div>
        </div>
        <Footer/>
    </div>
)
}