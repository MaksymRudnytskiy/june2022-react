import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";

import {userService} from "../../services";

import {userActions} from "../../redux";

import User from "../User/User";

function Users() {
    const dispatch = useDispatch()

    const {users, error, loading, userFromAPI} = useSelector(state => state.userReducer)

    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default Users;