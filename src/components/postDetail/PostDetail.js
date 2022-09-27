function PostDetail({post}) {
  return (
    <div>
      <p>userId: {post.userId}</p>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
    </div>
  );
}

export default PostDetail;