import "./pageLvl2.css"
import { useParams, Link } from "react-router-dom"
import { pages } from "../data"
export default function PageLvl2(){
    const {slug} = useParams()
    const category = pages.find(
        p => p.slug === slug
    )
     if (!category) {
         return <h1>404</h1>;
    }
    const children = pages.filter(
        p => category.children?.includes(p.slug)
    )
    return( 
        <div className="mainLvl2">
            <h1 className="title">
                {category.title}
            </h1>
            <div className="contentBlock">
                <img src={category.img} alt={category.title} className="image" />
                <div className="textBlock">
                    <p className="text">{category.mainText}</p>
                </div>
            </div>
            <h2 className="title2">
                Напрями:
            </h2>
            <div className="professionsList">
                
            </div>
        </div>
    )
}