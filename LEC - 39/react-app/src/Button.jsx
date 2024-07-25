export default function Button(){
    function greet(){
        console.log("Assalam alikum");
    }
    function name(){
        console.log("aqib");
    }

    return(
        <div>
            <button onClick={greet}>click me</button>
            <p onClick={name}>hi i am para!</p>
        </div>
    )
}