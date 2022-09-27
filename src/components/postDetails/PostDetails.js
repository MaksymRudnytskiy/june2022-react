import {useEffect, useState} from "react";

import {postService} from "../../services";

import PostDetail from "../postDetail/PostDetail";
import {useParams} from "react-router-dom";

function PostDetails() {

    const {postId} = useParams()

    let [post, setPost] = useState(null)

    useEffect(() => {
        postService.getAll(postId).then(({data}) => setPost(data))
    }, [postId])


    return (
        <div>
            <h3>Posts</h3>
            {/*{posts.map(post => <PostDetail key={post.id} post={post}/>)}*/}
            {post && (<PostDetail post={post}/>)}
        </div>
    );
}

export default PostDetails;