export default function AdviceBlock({adviceTitle, adviceText}){
    return(
        <div className="advice">
            <h2 className="advice-title">{adviceTitle}</h2>
            <p className="advice-text">{adviceText}</p>
        </div>
    )
}