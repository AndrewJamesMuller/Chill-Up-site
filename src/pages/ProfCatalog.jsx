import { Link } from "react-router-dom"
import CatalogBlockLeft from "../components/Catalog-block-left"
import CatalogBlockRight from "../components/Catalog-block-right"
import "./profCatalog.css"
export default function ProfCatalog() {
    return (
        <div className="prof-catalog-container">
            <h1 className="prof-catalog-title">Професійні напрями</h1>
            <div className="main">
                <div className="container-left">
                    <Link to="/ProfCatalog/law" className="link">
                        <CatalogBlockLeft img="/public/law.svg" text="Право" />
                    </Link>
                </div>
                <div className="container-right"></div>
            </div>
        </div>
    )
}