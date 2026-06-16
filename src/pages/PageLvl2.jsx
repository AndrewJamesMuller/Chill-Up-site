import "./pageLvl2.css"
import { useParams, Link } from "react-router-dom"
import { pages } from "../data"
import Footer from "../components/Footer"
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
                <img src={category.imageMain} alt={category.title} className="imageLv2" />
                <div className="textBlock">
                    <p className="text">{category.mainText}</p>
                </div>
            </div>
            <h2 className="title2">
                Напрями:
            </h2>
            <div className="professionsList">
                {children.map(child => (
                    <Link
                        key={child.slug}
                        to={`/ProfCatalog/${category.slug}/${child.slug}`}>
                            <div className="links">
                                {child.title}
                            </div>
                        </Link>
                ))}
            </div>
            <Footer/>
        </div>
    )
}