import {useEffect, useState} from "react";

import {commentService} from "../../services"

import Comment from "../comment/Comment";
import {Outlet} from "react-router-dom";



function Comments() {
    let [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <div>
                <h3>Comments</h3>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

            </div>
        </div>
    );
}

export default Comments;