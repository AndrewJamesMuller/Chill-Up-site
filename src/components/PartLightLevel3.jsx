import "../pages/pageLvl3.css"
export default function PartLightLevel3({array, title}){
    return(
        <section className="partLight">
            <div className="titleBlockLight">
                <h2 className="titleLight">{title}</h2>
            </div>
                <ul className="listLight">
                        {array.map(item=>(
                            <li className="elementLight" key={item}>
                                {item}
                            </li>
                        ))}
                </ul>
        </section>
    )
}