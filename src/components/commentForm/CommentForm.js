import {useForm} from "react-hook-form";
import {commentService} from "../../services";

function CommentForm({setComments}) {

    const {register, handleSubmit} = useForm({
        mode: 'all',
        defaultValues: {
            postId: 'postId',
            name: 'name',
            email: 'email',
            body: 'body'
        }
    })

    const submit = (obj) => {
        commentService.createComment(obj)
            .then(({data}) => setComments(comments => [...comments, data]))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="number" {...register('postId')}/>
                <input type="text" {...register('name')}/>
                <input type="text" {...register('email')}/>
                <input type="text" {...register('body')}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CommentForm;