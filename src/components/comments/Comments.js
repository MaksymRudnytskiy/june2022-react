import {useEffect, useState} from "react";

import {commentService} from "../../services"

import Comment from "../comment/Comment";


function Comments() {
  let [comments,setComments] = useState([])

  useEffect(() => {
    commentService.getAll().then(({data})=>setComments(data))
  },[])

  return (
    <div>
      <h3>Comments</h3>
      {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
    </div>
  );
}

export default Comments;