import { useParams, Link } from "react-router-dom"
import CatalogBlockLeft from "../components/Catalog-block-left"
import CatalogBlockRight from "../components/Catalog-block-right"
import {pagesLeft} from "../data.js"
import { pagesRight } from "../data.js"
import Footer from "../components/Footer"
import "./profCatalog.css"
export default function ProfCatalog() {
    const categoriesLeft = pagesLeft.filter(p => p.type === "category")
    const categoriesRight =  pagesRight.filter(p => p.type === "category")
    return (
        <div className="prof-catalog-container">
            <h1 className="prof-catalog-title">Професійні напрями</h1>
            <div className="main">
                <div className="container-left">
                    {categoriesLeft.map(cat=>(
                        <Link to={`/${cat.slug}`} className="link">
                            <CatalogBlockLeft img={cat.img} text={cat.title} />
                        </Link>
                    ))}
                </div>
                <div className="container-right">
                    {categoriesRight.map(cat=>(
                        <Link to={`/${cat.slug}`} className="link">
                            <CatalogBlockRight img={cat.img} text={cat.title} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}