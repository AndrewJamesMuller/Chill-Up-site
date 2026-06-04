import { Link } from "react-router-dom"
import CatalogBlockLeft from "../components/Catalog-block-left"
import CatalogBlockRight from "../components/Catalog-block-right"
import Footer from "../components/Footer"
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
                    <Link to="/ProfCatalog/builder" className="link">
                        <CatalogBlockLeft img="/public/builder1.svg" text="Будівництво" />
                    </Link>
                    <Link to="/ProfCatalog/sports" className="link">
                        <CatalogBlockLeft img="/public/sports1.svg" text="Спорт" />
                    </Link>
                    <Link to="/ProfCatalog/marketing" className="link">
                        <CatalogBlockLeft img="/public/marketing.svg" text="Маркетинг" />
                    </Link>
                    <Link to="/ProfCatalog/engineering" className="link">
                        <CatalogBlockLeft img="/public/engineering.svg" text="Інженерія" />
                    </Link>
                </div>
                <div className="container-right">
                    <Link to="/ProfCatalog/it" className="link">
                        <CatalogBlockRight img="/public/it.svg" text="IT-фахівці" />
                    </Link>
                    <Link to="/ProfCatalog/teachers" className="link">
                        <CatalogBlockRight img="/public/teacher.svg" text="Викладачі" />
                    </Link>
                    <Link to="/ProfCatalog/design" className="link">
                        <CatalogBlockRight img="/public/design.svg" text="Дизайн" />
                    </Link>
                    <Link to="/ProfCatalog/office" className="link">
                        <CatalogBlockRight img="/public/office.svg" text="Офісна справа" />
                    </Link>
                    <Link to="/ProfCatalog/medical" className="link">
                        <CatalogBlockRight img="/public/doctor.svg" text="Лікарська справа" />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}