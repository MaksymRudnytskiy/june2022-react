import {useEffect, useState} from "react";

import {postService} from "../../services";

import PostDetail from "../postDetail/PostDetail";

function PostDetails({postId}) {

    let [post, setPost] = useState([])

    useEffect(() => {
        postService.getAll(postId).then(({data}) => setPost(data))
    }, [postId])


    return (
        <div>
            <h3>Posts</h3>
            {/*{posts.map(post => <PostDetail key={post.id} post={post}/>)}*/}
            {post && <PostDetail post={post}/>}
        </div>
    );
}

export default PostDetails;