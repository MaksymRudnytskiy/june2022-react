import {Link, Outlet} from "react-router-dom";

function Comment({comment}) {
    return (
        <div>
            <p>postId: {comment.postId}</p>
            <p>id: {comment.id}</p>
            <p>name: {comment.name}</p>
            <p>email: {comment.email}</p>
            <p>body: {comment.body}</p>
            <div>
                <span><Link to={comment.postId.toString()}>Posts</Link></span>
            </div>
            <div><Outlet/></div>
            <br/>
            <hr/>
        </div>
    );
}

export default Comment;