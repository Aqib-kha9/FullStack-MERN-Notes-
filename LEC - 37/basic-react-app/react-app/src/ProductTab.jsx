import Product from "./Product"

function ProductTab(){
    // let options = ["hi-tech","durable","fast"];
    // let options2 = {a:"hi-tech", b:"durabel", c:"fast"};




    return (
        <>
            <Product title="Mobile" price={19000}/>
            <Product title="Laptop" price={39000}/>
            <Product title="Pen" price={10}/>
        </>
    )
};

export default ProductTab

