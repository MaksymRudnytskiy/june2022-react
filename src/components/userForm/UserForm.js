import {useForm} from "react-hook-form";
import {userService} from "../../services";

function UserForm({setUsers}) {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email'
        }
    })

    const submit = (obj) => {
        userService.createUser(obj)
            .then(({data}) => setUsers(users => [...users, data]))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name')}/>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('email')}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default UserForm;