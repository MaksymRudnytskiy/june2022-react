import {useEffect, useState} from "react";
import {userService} from "../../services";
import User from "../user/User";
import UserForm from "../userForm/UserForm";

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll()
            .then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
}

export {Users};