function Comment({comment}) {
    return (
        <div>
            <p>Post Id: {comment.postId}</p>
            <p>Id: {comment.id}</p>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
            <hr/>
        </div>
    );
}

export default Comment;