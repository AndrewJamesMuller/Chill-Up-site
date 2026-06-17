import { useParams } from "react-router-dom";
import { pages } from "../data";
import "./pageLvl3.css"
import PartLightLevel3 from "../components/PartLightLevel3";
import PartDarkLvl3 from "../components/PartDarkLvl3";
import Footer from "../components/Footer";

export default function PageLvl3() {

    const { category, profession } = useParams();

    const currentCategory = pages.find(
        p => p.slug === category
    );

    if (!currentCategory) {
        return <h1>Категорію не знайдено</h1>;
    }

    const currentProfession = pages.find(
        p =>
            currentCategory.children.includes(p.slug) &&
            p.slug === profession
    );

    if (!currentProfession) {
        return <h1>Професію не знайдено</h1>;
    }

    return (
        <div className="mainLvl3">
            <h1 className="title">{currentProfession.title}</h1>
            <div className="textblock">
                <p className="text">{currentProfession.text}</p>
            </div>
            <div className="listsContainer">
                <PartLightLevel3 title={currentProfession.titleAboutLearn} array={currentProfession.listOfLearning}/>
                <PartDarkLvl3 title={currentProfession.titleAboutSkills} array={currentProfession.listOfSkills}/>
                <PartLightLevel3 title={currentProfession.titleOfProfessions} array={currentProfession.listOfPossibleWork}/>
                <PartDarkLvl3 title={currentProfession.titleOfPreferences} array={currentProfession.listOfPreferences}/>
            </div>
            <Footer/>
        </div>
    );
}