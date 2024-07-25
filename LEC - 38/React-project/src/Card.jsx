import './Card.css'

export default function Card({title,disc1,disc2,oldPrice,newPrice}){
    let styles = {backgroundColor: "yellow", marginBottom: "0px", paddingBottom:"15px",borderBottomRightRadius:"15px",borderBottomLeftRadius:"15px"}
    return(
        <div className="Card">
            <h3>{title}</h3>
            <p>{disc1}</p>
            <p>{disc2}</p>
            <h4 style={styles}>{oldPrice}   {newPrice}</h4>
        </div>
    )
};