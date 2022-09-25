function Comment({comment}) {
    return (
        <div>
            <p>postId: {comment.postId}</p>
            <p>Id: {comment.id}</p>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
            <br/>
        </div>
    );
}

export default Comment;