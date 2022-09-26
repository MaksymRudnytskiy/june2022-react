function Comment({comment}) {
    return (
        <div>
            <p>postId: {comment.postId}</p>
            <p>id: {comment.id}</p>
            <p>name: {comment.name}</p>
            <p>email: {comment.email}</p>
            <p>body: {comment.body}</p>
            <br/>
            <hr/>
        </div>
    );
}

export default Comment;