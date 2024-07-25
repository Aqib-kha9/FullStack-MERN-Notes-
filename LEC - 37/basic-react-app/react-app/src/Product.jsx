import './Product.css'

function Product({title,price}){
    let isDiscount = price>30000;
    let styles ={backgroundColor: isDiscount ? "yellow" : ""}
    return (
        <div className="Product" style={styles}>
            <h4>{title}</h4>
            <p>{price}</p>
            {isDiscount && <p>5% Discount</p>}
        </div>
    )
}

export default Product