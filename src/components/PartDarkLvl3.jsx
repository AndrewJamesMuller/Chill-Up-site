import "../pages/pageLvl3.css"
export default function PartDarkLvl3({array, title}){
   return(
     <section className="partDark">
            <div className="titleBlockDark">
                <h2 className="titleDark">{title}</h2>
                </div>
                <ul className="listDark">
                        {array.map(item=>(
                            <li className="elementDark" key={item}>
                                {item}
                            </li>
                        ))}
                </ul>
        </section>
   )
}