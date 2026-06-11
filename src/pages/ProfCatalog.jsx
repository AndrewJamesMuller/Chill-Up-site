import { useParams, Link } from "react-router-dom"
import CatalogBlockLeft from "../components/Catalog-block-left"
import CatalogBlockRight from "../components/Catalog-block-right"
import { pages } from "../data.js"
import Footer from "../components/Footer"
import "./profCatalog.css"
export default function ProfCatalog() {
    const categoriesLeft = pages.filter(p => p.type === "category" && p.column==="left")
    const categoriesRight =  pages.filter(p => p.type === "category" && p.column === "right")
    return (
        <div className="prof-catalog-container">
            <h1 className="prof-catalog-title">Професійні напрями</h1>
            <div className="main">
                <div className="container-left">
                    {categoriesLeft.map(cat=>(
                        <Link to={`/profCatalog/${cat.slug}`} className="link" key={cat.slug}>
                            <CatalogBlockLeft img={cat.img} text={cat.title} />
                        </Link>
                    ))}
                </div>
                <div className="container-right">
                    {categoriesRight.map(cat=>(
                        <Link to={`/profCatalog/${cat.slug}`} className="link" key={cat.slug}>
                            <CatalogBlockRight img={cat.img} text={cat.title}/>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}