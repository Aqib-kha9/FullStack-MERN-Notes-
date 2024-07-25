export default function Form(){
    function eventOnClick(event){
        event.preventDefault();
        console.log("form was submitted!");
    }

    return(
        <form onClick={eventOnClick}>
            <input type="text" placeholder="Write Something" />
            <button>submit</button>
        </form>
    )
}