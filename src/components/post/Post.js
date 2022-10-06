function Post({post}) {
    return (
        <div>
            <p>User Id: {post.userId}</p>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <hr/>
        </div>
    );
}

export default Post;