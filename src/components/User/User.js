import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

function User({user}) {

    const dispatch = useDispatch();

    const {id, name, username, email} = user

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Select</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>Get from API</button>
            <button onClick={() => dispatch(userActions.deleteById(id))}>Delete</button>
            <br/>
            <hr/>
        </div>
    );
}

export default User;