import {useEffect, useState} from "react";
import {commentService} from "../../services";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";

function Commets() {
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentService.getAll()
            .then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            <CommentForm setComments={setComments}/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}

export {Commets};