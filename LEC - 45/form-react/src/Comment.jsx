import { useState } from "react"
import CommentsForm from "./CommentsForm";
import './Comments.css'

export default function Comment(){

    let [comments, setComments] = useState([{
        userName: "@ak",
        remark: "its a good!",
        rating: "4"
    }]);

    let addNewComment = (comment) =>{
        setComments((currComments)=> [...currComments, comment]);
    }

    return(
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment,idx)=>(
                    <div className="Comment" key={idx}>
                    <span><i> {comment.remark} </i></span>
                    &nbsp;
                    <span>( rating = {comment.rating} )</span>
                    <p>- {comment.userName}</p>
                    </div>
                ))}
                
                
            </div>
                <hr />
            <CommentsForm addNewComment={addNewComment}/>
        </>  
    
    )
}