import "../pages/ProfCatalog.css"
export default function ProfCatalog({img, text}) {
    return(
        <div className="catalog-block-left">
            <p className="textCat">{text}</p>
            <img src={img} alt={text} className="image" />
        </div>
    )
}