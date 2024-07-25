import { useState } from "react";

export default function Count(){
    let [isLike, setisLike] = useState(false);
    let [count, setCount] = useState(0);
    
    let clicked = ()=>{
        setisLike(!isLike);
        setCount(count+1);
    }
    let styles = {color: "red"};
    
    return(
        <>
            <p onClick={clicked}>
                {!isLike?<i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart" style={styles}></i>}
            </p>

            <h3>count:{count}</h3>
            <button onClick={clicked}> incCount </button>
        </>
    )
}