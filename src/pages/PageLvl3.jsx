import { useParams } from "react-router-dom";
import { pages } from "../data";

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
        <div>
            <h1>{currentProfession.title}</h1>

            <p>{currentProfession.text}</p>
        </div>
    );
}