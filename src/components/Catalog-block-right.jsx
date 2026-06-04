export default function CatalogBlockRight({img, text}) {
    return(
        <div className="catalog-block-right">
            <img src={img} alt={text} className="image" />
            <p className="textCat">{text}</p>
        </div>
    )
}